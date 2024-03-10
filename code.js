const {BrowserWindow} = require("electron");

let int = setInterval(() => {
    const window = BrowserWindow.getAllWindows()[0];
    if (window.title.toLowerCase().includes("update")) return;
    clearInterval(int);
    window.webContents.executeJavaScript(`const _style = document.createElement("style");
_style.innerHTML = \`* {
    --header-primary: #fff !important;
    --header-secondary: #ccc !important;
    --background-primary: #000 !important;
    --background-secondary: #000 !important;
    --background-secondary-alt: #000 !important;
    --background-tertiary: #000 !important;
    --background-accent: #000 !important;
    --background-floating: #000 !important;
    --background-mobile-primary: #000 !important;
    --background-mobile-secondary: #000 !important;
    --channels-default: #8e9297 !important;
    --info-help-background: #000 !important;
    --background-mentioned: #001 !important;
    --background-mentioned-hover: #000 !important;
    --background-modifier-selected: #111 !important;
    --interactive-active: #fc0 !important;
    --text-normal: #ccc !important;
    /*--text-link: #fc0 !important;*/
    --scrollbar-thin-thumb: #111 !important;
    --scrollbar-thin-track: #111 !important;
    --channeltextarea-background: #111 !important;
    --deprecated-store-bg: #000 !important;
    font-family: cursive;
    font-style: italic;
}

.clickable-1JJAn8 {
    color: var(--channels-default);
}

.selected-1GqIat.icon-22AiRD {
    color: var(--channels-default);
}

.roleName-32vpEy {
    color: #ddd;
}

.activityText-yGKsKm {
    color: #777;
}

.colorInteractiveActive-3Ip9Eu {
    color: var(--channels-default);
}

.selected-aXhQR6.container-2Pjhx- {
    color: var(--channels-default);
}

.channelName-2YrOjO {
    color: #555;
}

.selected-3s45Ha.item-PXvHYJ,
.selected-3s45Ha.item-PXvHYJ:hover {
    color: #fff;
}

.typeWindows-1za-n7 {
    background-color: var(--background-primary);
    margin: 0;
}

.scroller-1Bvpku {
    background-color: var(--background-primary);
}

.item-2LIpTv {
    background-color: var(--interactive-active);
}

.headerTagUsernameBase-1NqrY5 {
    color: var(--header-primary);
}

.tabBody-3YRQ8W {
    background-color: #000;
}

.scroller-3gAZLs {
    background-color: #000;
}

.unicodeShortcut-15J8Ck {
    background-color: #000;
}

.theme-dark.footer-2gL1pp {
    background-color: #000;
}

.textArea-1Lj-Ns {
    background-color: #000;
    border: 1px solid #333;
}

.theme-dark.root-1gCeng {
    background-color: #000;
}

.scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt {
    background: #000;
}

.scroller-2MALzE.list-obNEuP.none-2-_0dP.scrollerBase-_bVAAt {
    background: #000;
}

.unicodeShortcut-3N8oDe {
    background: #000;
}

.peopleColumn-1wMU14 {
    background: #000;
}

.colorInteractiveActive-30E9n8.size12-oc4dx4.goalText-1XeSVA {
    color: #ccc;
}

.roleName-2ZJJYR {
    color: #ccc;
}

.colorInteractiveActive-30E9n8.size16-rrJ6ag {
    color: #ccc;
}

.headerTagUsernameNoNickname-1TjuLc {
    color: var(--header-primary);
}

.typeWindows-2-g3UY.withFrame-2dL45i.titleBar-1it3bQ.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr {
    background: var(--background-primary);
}

.bg-1QIAus {
    background: var(--background-primary);
}

.scroller-18M1mG.thin-31rlnD.scrollerBase-_bVAAt {
    background: var(--background-primary);
}

.theme-dark.container-ZMc96U.themed-Hp1KC_ {
    background: #000;
}\`;
document.head.appendChild(_style);`);
}, 100);