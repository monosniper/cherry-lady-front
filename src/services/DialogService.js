import {reactive} from "vue";
import {fem} from "@/helpers/fem.js";

export const DIALOGS = {
    BLANK: 'blank',
    NOTIFIER: 'notifier',
    THANKS: 'thanks',
}

class DialogService {
    constructor() {
	this.dialogs = reactive(
	    fem(DIALOGS, ([, name]) => [name, false])
	)
    }
    
    open(name) {
	this.dialogs[name] = true
    }
    
    close(name) {
	this.dialogs[name] = false
    }
    
    toggle(name) {
	this.dialogs[name] = !this.dialogs[name]
    }
}

export default new DialogService()