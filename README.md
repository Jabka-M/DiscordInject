# DiscordInject V2 (+ AMOLED desktop theme)
### JS code injector to discord core
## How to use:

### Clone repository
```
git clone https://github.com/Jabka-M/DiscordInject.git
```

### Write code
Write your code in code.js (there's an AMOLED desktop theme in this repo).
#### Remember!
Injected code is run when Discord Updater is opened (BEFORE the actual client is started).  
So if you want to inject some code into the client, you need to wait for it to open (an example can be found in the code.js file in this repository, there's a setInterval that checks that the window title doesn't have "update" in it).

### Inject
Just run the inject.cmd file.

### Revert
All changes made to the discord core can be removed by running the inject.cmd file again.

## Changelog (V2):
* No longer depends on Node.js (all scripts now on powershell)  
* Inject to another place for more flexibility (now can patch Discord Updater)  
* AMOLED desktop theme (you can edit the code.js file in this repo to change CSS)  
* No dependencies in system (i think everyone has PowerShell 5.1, right?)  
* Now can inject code without killing Discord process (but you must restart Discord to apply the changes)