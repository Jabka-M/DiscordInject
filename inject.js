(async () => {
    const asar = require("asar");
    const fs = require("fs");
    const path = require("path");
    const fse = require("fs-extra");
    const util = require("util");
    const readFile = util.promisify(fs.readFile);
    const writeFile = util.promisify(fs.writeFile);
    const discordPath = `${process.env.LOCALAPPDATA}\\Discord\\`;
    const {spawn} = require("child_process");
    const mainScreen = `./tmp/app/mainScreen.js`;
    let executablePath;
    await fs.access(discordPath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Discord does not exists in ${discordPath}`);
            process.exit(1);
        }
    });
    let appFolder = fs.readdirSync(discordPath).filter((value) => {return /app\-[\w\.]+/gi.exec(value)});
    if (!appFolder.length) {
        console.error(`App folder does not exists in ${process.env.LOCALAPPDATA}\\Discord\\`);
        process.exit(1);
    }
    appFolder = path.resolve(discordPath, appFolder[0]);
    await fs.access(appFolder, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`${appFolder} does not exists`);
            process.exit(1);
        }
    });
    let modulesFolder = path.resolve(appFolder, "modules");
    executablePath = path.resolve(appFolder, "Discord.exe")
    await fs.access(modulesFolder, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`${modulesFolder} does not exists`);
            process.exit(1);
        }
    });
    let coreFolder = fs.readdirSync(modulesFolder).filter((value) => {return /discord_desktop_core\-\d/gi.exec(value)});
    if (!coreFolder.length) {
        console.error(`Desktop core folder does not exists in ${modulesFolder}`);
        process.exit(1);
    }
    coreFolder = path.resolve(modulesFolder, coreFolder[0], "discord_desktop_core");
    await fs.access(coreFolder, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`${coreFolder} does not exists`);
            process.exit(1);
        }
    });
    let core = path.resolve(coreFolder, "core.asar");
    await fs.access(core, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`${core} does not exists`);
            process.exit(1);
        }
    });
    console.log("Unpacking discord core...");
    await fse.remove("./tmp");
    await util.promisify(fs.copyFile)(core, "./core.asar");
	await fs.access("./core.asar.backup", fs.constants.F_OK, async () => {await util.promisify(fs.copyFile)(core, "./core.asar.backup");})
    asar.extractAll("./core.asar", "./tmp");
    await util.promisify(fs.copyFile)(mainScreen, `${mainScreen}.backup`);
    let code = await readFile("./code.js");
    code = `mainWindow.webContents.on('dom-ready', () => {setTimeout(() => {mainWindow.webContents.executeJavaScript(\`${code}\`);}, 3000);});\nmainWindow.webContents.`;
    console.log("Checking...");
    let targetCode = await readFile(mainScreen, "utf-8");
    if (targetCode.includes("mainWindow.webContents.on(\'dom-ready\', () => {")) {
        console.error("Already Injected");
        process.exit(1);
    }
    let injectedCode = targetCode.replace("mainWindow.webContents.", code);
    console.log("Injecting...");
    await writeFile(mainScreen, injectedCode);
    console.log("Building new core...");
    asar.createPackage("./tmp", "./core.asar", (err) => {
        if (err) {
            console.error("Failed building core")
            process.exit(1);
        }
    });
    require("find-process")("name", "Discord", true).then((list) => {
        if (!list.length) {return;}
        else {console.log("Killing discord...");}
        for (let discordProcess of list) {
            process.kill(discordProcess.pid);
        }
    });
    setTimeout(async () => {
        console.log("Removing original core...");
        await fse.remove(core);
        console.log("Setting up new core...");
        await util.promisify(fs.copyFile)("./core.asar", core);
        console.log("Cleaning up...");
        await fse.remove("./core.asar");
        await fse.remove("./tmp");
		console.log("Starting Discord");
		await spawn(executablePath, [], {detached: true, stdio: ["ignore", "ignore", "ignore"]}).unref();
        console.log("Success");
    }, 5000);
})();
