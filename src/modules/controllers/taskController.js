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

    toggle() {
        this.task.toggleDone();
    }

    addEditTaskInput() {
        const element = this.elementFactory.buildTaskEditInput(this.task);
        PubSub.publish(Topics.ADD_POP_UP, element);
    }

    updateView() {
        this.view.setContent(this.task);
    }

    update() {
        this.updateView();
    }

    finalize() {
        this.task.removeObserver(this);
    }

    delete() {
        this.finalize();
        this.task.unlink();
    }
}