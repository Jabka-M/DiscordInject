const {BrowserWindow} = require("electron");

let int = setInterval(() => {
    const window = Array.from(BrowserWindow.getAllWindows()).find(win => !win.title.toLowerCase().includes("update"));
    if (window === undefined) return;
    clearInterval(int);
    window.webContents.executeJavaScript(`const _style = document.createElement("style");
_style.innerHTML = \`

.visual-refresh .chatContent_f75fb0 {
	background: #000 !important;
}

.visual-refresh .wrapper_ef3116 {
	background-color: #000 !important;
}

.visual-refresh .container__2637a {
	background: #000 !important;
}

.theme-dark .themed__9293f {
	background: #000 !important;
}

.members_c8ffbb {
	background: #000 !important;
}

.member_c8ffbb {
	background: #000 !important;
}

:where(.visual-refresh) .themedBackground__74017 {
	background: #000 !important;
}

.visual-refresh .panels_c48ade {
	background: #000 !important;
}

.visual-refresh .wrapper_f7ecac {
	background: #000 !important;
}

:where(.visual-refresh) .menu_c1e9c4 {
	background-color: #000 !important;
}

.visual-refresh .container__3dde2 {
	background-color: #000 !important;
}

.visual-refresh :where(.outer_c0bea0) {
	background: #000 !important;
}

:where(.outer_c0bea0).custom-user-profile-theme {
	background: #000 !important;
}

.custom-user-profile-theme .themeColor_fb7f94.primary_fb7f94 {
	background: #000 !important;
}

:where(.visual-refresh) .lookFilled__201d5.colorPrimary__201d5 {
	border-color: #101010 !important;
}

.custom-user-profile-theme .themeColor_fb7f94.primary_fb7f94:hover {
	background: #101010 !important;
}

.custom-user-profile-theme .container_a99829 {
	background: #101010 !important;
}

:where(.overlay_c0bea0) {
	background: #101010 !important;
}

.visual-refresh .stackedBars__74017 {
	background: #000 !important;
}

.visual-refresh .replyBar__841c8, .visual-refresh .threadSuggestionBar__841c8 {
	background-color: #000 !important;
}

.replyBar__841c8, .threadSuggestionBar__841c8 {
	background: #000 !important;
}

.visual-refresh .sidebarRegionScroller__23e6b {
	background: #000 !important;
}

.contentRegion__23e6b {
	background: #000 !important;
}

.visual-refresh .contentRegionScroller__23e6b {
	background-color: #000 !important;
}

.visual-refresh .shop__08415 {
	background-color: #000 !important;
}

.visual-refresh .shopCardDark_c3d04b, .visual-refresh .shopCardLight_c3d04b {
	background-color: #101010 !important;
}

.visual-refresh .darkCardBackground_c3d04b, .visual-refresh .lightCardBackground_c3d04b {
	background-color: #101010 !important;
}

.visual-refresh .tabBody__133bf {
	background-color: #000 !important;
}

.container__7d20c {
	background: #000 !important;
}

.visual-refresh .outer_bf1984 {
	background-color: #000 !important;
}
\`;
document.head.appendChild(_style);`);
}, 100);