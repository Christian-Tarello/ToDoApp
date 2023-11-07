import PubSub from "pubsub-js";
import Messages from "../utils/messages";

export default class AddTaskController {
    constructor(elementFactory) {
        this.elementFactory = elementFactory;
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    addTaskInput() {
        const element = this.elementFactory.buildTaskInput();
        PubSub.publish(Messages.ADD_POP_UP, element);
    }
}