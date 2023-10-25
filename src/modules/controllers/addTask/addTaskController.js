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

    paintTaskInput(element) {
        PubSub.publish(Messages.ADD_POP_UP, element);
    }

    setInteractions() {
        PubSub.subscribe(Messages.BUILT_TASK_INPUT, (msg, element) => {this.paintTaskInput(element)});
        PubSub.subscribe(Messages.BUILD_TASK_INPUT, () => {this.disable()});
        PubSub.subscribe(Messages.REMOVE_TASK_INPUT, () => {this.enable()});
    }
}