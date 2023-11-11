import PubSub from "pubsub-js";
import Topics from "../utils/topics";

export default class TaskController {
    constructor(task, elementFactory) {
        this.task = task;
        this.task.addObserver(this);
        this.elementFactory = elementFactory;
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    delete() {
        this.remove();
        this.task.unlink();
        PubSub.publish(Topics.REMOVE_TASK, this.task.id);
    }

    remove() {
        this.task.removeObserver(this);
        this.view.remove();
    }

    toggle() {
        this.task.toggleDone();
    }

    update() {
        this.view.setContent(this.task);
    }

    addEditTaskInput() {
        const element = this.elementFactory.buildTaskEditInput(this.task);
        PubSub.publish(Topics.ADD_POP_UP, element);
    }
}