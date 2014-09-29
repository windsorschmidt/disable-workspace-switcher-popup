const WorkspaceSwitcherPopup = imports.ui.workspaceSwitcherPopup;

let oldShow;

function init() {
    oldShow = WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show;
}

function enable() {
    WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show = function() { return false };
}

function disable() {
    WorkspaceSwitcherPopup.WorkspaceSwitcherPopup.prototype._show = oldShow;
}

// Backwards compatability with 3.0.2
function main() {
    enable();
}
