# DiscordInject V2 (+ AMOLED desktop theme)
### JS code injector to discord core
## How to use:

### Clone repository
```
git clone https://github.com/Jabka-M/DiscordInject.git
```

### Write code
Write your code in .js file with any name in jsfiles/ subdirectory (there are also examples in this repo).
#### Remember!
Injected code is run when Discord Updater is opened (BEFORE the actual client is started).  
So if you want to inject some code into the client, you need to wait for it to open (examples can be found in themes .js files in this repository, there's a setInterval that checks that the window title doesn't have "update" in it).

### Inject
Just run the inject.cmd file.

### Revert
All changes made to the discord core can be removed by running the inject.cmd file again.

## Changelog:
* Support for selecting from multiple .js files in the jsfiles/ subdirectory  
* Added example for nitro custom themes  
* Fixed some error messages