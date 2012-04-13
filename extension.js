const Main = imports.ui.main;

let oldWorkspaceSwitcherPopup;

function init() {
    oldWorkspaceSwitcherPopup = Main.wm._workspaceSwitcherPopup;
}

function enable() {
    // monkey patch
    Main.wm._workspaceSwitcherPopup = function(actor) {
        return false;
    }
}

function disable() {
    Main.wm._workspaceSwitcherPopup = oldWorkspaceSwitcherPopup;
}

// Backwards compatability with 3.0.2
function main() {
    enable();
}
