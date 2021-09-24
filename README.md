# DiscordInject
### JS code injector to discord core

## How to use:

#### Clone repository
```
git clone https://github.com/Jabka-M/DiscordInject.git
```

### Install dependencies
```
npm install
```

### Write code
Create file code.js in cloned folder and write your code there (code can use global Discord variables such as mainWindow and others)

### Inject
```
node inject.js
```

Notes:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does NOT work with PTB or Canary Discord.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Make sure Discord installed in %LOCALAPPDATA%\Discord.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discord process gonna be terminated automatically.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It excepts WMIC installed on your PC (this is standard windows file, but some PC doesn't have it (idk why))
