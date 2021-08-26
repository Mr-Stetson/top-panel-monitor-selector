const Main = imports.ui.main;
const LM = Main.layoutManager;

function enable() {
    LM.panelBox.x = 0;
    LM.panelBox.y = 1264;
    LM.panelBox.width = 1920;
    LM.panelBox.visible = true;
}

function disable() {
    LM.panelBox.x = LM.primaryMonitor.x;
    LM.panelBox.y = LM.primaryMonitor.y;
    LM.panelBox.width = LM.primaryMonitor.width;
    LM.panelBox.visible = true;
}

function init() {}