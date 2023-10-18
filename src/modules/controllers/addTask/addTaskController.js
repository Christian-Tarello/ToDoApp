import PubSub from "pubsub-js";
import Messages from "../../utils/messages";

export default class AddTaskController {
    constructor(view) {
        this.view = view;
        this.setInteractions();
    }

    enable() {
        this.view.enable();
    }

    disable() {
        this.view.disable();
    }

    setInteractions() {
        PubSub.subscribe(Messages.ADD_TASK_INPUT, () => {this.disable()});
        PubSub.subscribe(Messages.REMOVE_TASK_INPUT, () => {this.enable()});
    }
}