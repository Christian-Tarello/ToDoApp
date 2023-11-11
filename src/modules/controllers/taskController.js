import PubSub from "pubsub-js";
import Topics from "../utils/topics";

export default class TaskController {
    constructor(task, elementFactory) {
        this.task = task;
        this.task.addObserver(this);
        this.elementFactory = elementFactory;
        this.subTokens = [];
        this.setInteractions();
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    setInteractions() {
        this.subTokens.push(
            PubSub.subscribe(Topics.FINALIZE_ALL_TASKS, () => {this.finalize()}),
        );
    }

    delete() {
        this.finalize();
        this.remove();
        this.task.unlink();
        PubSub.publish(Topics.REMOVE_TASK, this.task.id);
    }

    remove() {
        this.view.remove();
    }

    finalize() {
        this.subTokens.forEach((token) => {PubSub.unsubscribe(token)});
        this.task.removeObserver(this);
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