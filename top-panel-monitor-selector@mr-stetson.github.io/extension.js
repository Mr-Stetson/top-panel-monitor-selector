const Main = imports.ui.main;
const LM = Main.layoutManager;
const MT = Main.messageTray;

function enable() {
    for (const monitor of LM.monitors) {
    	if (monitor.width == 1920) {
    	    LM.panelBox.x = monitor.x;
    	    LM.panelBox.y = monitor.y;
    	    LM.panelBox.width = monitor.width;
    	    LM.panelBox.visible = true;
    	    const constraint = MT.get_constraints()[0];
    	    if (constraint) {
    	        constraint.index = monitor.index;
    	        MT._constraint = constraint;
    	    }
    	}
    }
}

function disable() {
    LM.panelBox.x = LM.primaryMonitor.x;
    LM.panelBox.y = LM.primaryMonitor.y;
    LM.panelBox.width = LM.primaryMonitor.width;
    LM.panelBox.visible = true;
    delete MT._constraint;
}

function init() {}
