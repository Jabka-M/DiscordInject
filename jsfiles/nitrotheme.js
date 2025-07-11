const {BrowserWindow} = require("electron");

let int = setInterval(() => {
    const window = Array.from(BrowserWindow.getAllWindows()).find(win => !win.title.toLowerCase().includes("update"));
    if (window === undefined) return;
    clearInterval(int);
    window.webContents.executeJavaScript(`const _style = document.createElement("style");
_style.innerHTML = \`
.theme-dark {
    --bg-overlay-opacity-1: 0.9;
    --bg-overlay-opacity-2: 0.85;
    --bg-overlay-opacity-3: 0.8;
    --bg-overlay-opacity-4: 0.75;
    --bg-overlay-opacity-5: 0.7;
    --bg-overlay-opacity-6: 0.15;
    --bg-overlay-opacity-app-frame: var(--bg-overlay-opacity-5);
    --theme-base-color: var(--theme-base-color-dark);
    --theme-text-color: var(--theme-text-color-dark);
    --theme-base-color-hsl: var(--theme-base-color-dark-hsl);
    --bg-overlay-color: 0 0 0;
    --bg-overlay-color-inverse: 255 255 255;
    --bg-overlay-opacity-1: 0.85;
    --bg-overlay-opacity-2: 0.8;
    --bg-overlay-opacity-3: 0.7;
    --bg-overlay-opacity-4: 0.5;
    --bg-overlay-opacity-5: 0.4;
    --bg-overlay-opacity-6: 0.1;
    --bg-overlay-opacity-hover: 0.5;
    --bg-overlay-opacity-hover-inverse: 0.08;
    --bg-overlay-opacity-active: 0.45;
    --bg-overlay-opacity-active-inverse: 0.1;
    --bg-overlay-opacity-selected: 0.4;
    --bg-overlay-opacity-selected-inverse: 0.15;
    --bg-overlay-opacity-chat: 0.8;
    --bg-overlay-opacity-home: 0.85;
    --bg-overlay-opacity-home-card: 0.8;
    --bg-overlay-opacity-app-frame: var(--bg-overlay-opacity-4);
    --bg-overlay-opacity-floating: 0.65;
    --background-base-lower: var(--bg-overlay-4) !important;
    --background-base-low: var(--bg-overlay-4) !important;
    --background-surface-high: var(--bg-overlay-4) !important;
    --chat-background-default: var(--bg-overlay-4) !important;
    --bg-surface-raised: var(--bg-overlay-4) !important;
    --autocomplete-bg: var(--bg-overlay-4) !important;
    --__spoiler-background-color--hidden: var(--primary-630);
    --__spoiler-background-color--hidden--hover: hsl(var(--primary-630-hsl)/0.8);
    --__spoiler-background-color--hidden: var(--primary-700);
    --__spoiler-background-color--hidden--hover: hsl(var(--primary-700-hsl)/0.8);
    --__spoiler-background-color--revealed: var(--opacity-white-8);
    --__spoiler-text-color--hidden: transparent;
    --__spoiler-warning-text-color: var(--primary-200);
    --__spoiler-warning-text-color--hover: var(--white-500);
    --__spoiler-warning-background-color: var(--opacity-black-60);
    --__spoiler-warning-background-color--hover: var(--opacity-black-88);
    --__spoiler-container-box-shadow-color: var(--opacity-black-8);
    --__obscured-background-blur-radius: 40px;
    --__obscured-background-brightness: 0.55;
    --custom-theme-background: linear-gradient(48.17deg, var(--bg-gradient-midnight-blurple-1) 11.21%, var(--bg-gradient-midnight-blurple-2) 61.92%);
    --custom-theme-primary-color: #5348ca;
    --custom-theme-secondary-color: #140730;
    --theme-base-color-light-hsl: 244.70588235294116 100% 90%;
    --theme-base-color-light: rgb(208,204,255);
    --theme-text-color-light: rgb(39,0,128);
    --theme-base-color-dark-hsl: 258.46153846153845 100% 5.098039215686274%;
    --theme-base-color-dark: rgb(8,0,26);
    --theme-text-color-dark: rgb(162,153,255);
    --theme-base-color-amount: 50%;
    --theme-text-color-amount: 38%;
    --bg-overlay-selected: unset;
    --bg-overlay-hover: unset;
    --bg-overlay-active: unset;
    --custom-app-border-frame-base: color-mix(in oklab,var(--custom-theme-primary-color) 50%,var(--custom-theme-secondary-color) 50%);
    --app-border-frame: color-mix(in oklab,var(--custom-app-border-frame-base) 24%,var(--border-subtle) 100%);
    --bg-overlay-1: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-1)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-1))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-2: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-2)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-2))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-3: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-3)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-3))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-4: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-4)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-4))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-5: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-5)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-5))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-6: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-6)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-6))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-hover: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-hover-inverse)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-hover-inverse))) fixed 0 0 /cover,linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-hover)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-hover))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-active: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-active-inverse)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-active-inverse))) fixed 0 0 /cover,linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-active)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-active))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-selected: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-selected-inverse)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-selected-inverse))) fixed 0 0 /cover,linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-selected)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-selected))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-chat: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-chat)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-chat))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-home: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-home-card: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home-card)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home-card))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-app-frame: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-app-frame)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-app-frame))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
    --bg-overlay-floating: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-floating)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-floating))) fixed 0 0 /cover,var(--custom-theme-background) fixed 0 0 /cover;
}

.itemsContainer_ef3116 {
    background: var(--bg-overlay-app-frame,var(--background-tertiary));
}

.visual-refresh .container__2637a {
    background: var(--bg-overlay-4,var(--background-base-lowest));
    margin-left: -1px;
    padding-bottom: var(--custom-app-panels-height,0);
}

.visual-refresh .bg__960e4 {
    background: var(--bg-overlay-app-frame,var(--bg-base-tertiary));
}

.sidebarRegionScroller__23e6b {
    background: var(--bg-overlay-4) !important;
}

.accountProfileCard__1fed1 {
    background-color: var(--bg-overlay-4) !important;
}

.cardPrimary__73069, .cardPrimary__73069.editable__73069 {
    background-color: var(--bg-overlay-4) !important;
}

.privateChannels__35e86 {
    background: var(--bg-overlay-4) !important;
}

.scroller__99e7c {
    background: var(--bg-overlay-4) !important;
}

.contentWrapper__08434 {
    background: var(--bg-overlay-4) !important;
}

.scrollableContent__927fc {
    background: var(--bg-overlay-4) !important;
}

.searchBarContainer__927fc {
    background: var(--bg-overlay-4) !important;
}

.autocomplete__13533 {
    background: var(--autocomplete-bg) !important
}
\`;
document.head.appendChild(_style);
setTimeout(() => {
    // <img width="48" alt="Значок приложения" draggable="false" src="/assets/e5f2a55421a6dc7e.webp">
    let _logo = document.querySelector(".childWrapper__6e9f8.childWrapperNoHoverBg__6e9f8:not(.acronym__6e9f8)");
    _logo?.querySelector("svg")?.remove();
    let _newlogo = document.createElement("img");
    _newlogo.setAttribute("width", "48");
    _newlogo.setAttribute("alt", "Значок приложения");
    _newlogo.setAttribute("draggable", "false");
    _newlogo.setAttribute("src", "/assets/e5f2a55421a6dc7e.webp");
    _logo?.appendChild(_newlogo);
}, 3000);
`);
}, 100);