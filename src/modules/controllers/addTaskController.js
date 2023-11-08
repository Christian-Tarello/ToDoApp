import PubSub from "pubsub-js";
import Topics from "../utils/topics";

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
        PubSub.publish(Topics.ADD_POP_UP, element);
    }
}