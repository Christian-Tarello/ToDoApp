import PubSub from "pubsub-js";
import Topics from "../utils/topics";

export default class TaskController {
    constructor(task, elementFactory) {
        this.task = task;
        this.elementFactory = elementFactory;
        this.subscriptionTokens = [];
        this.setInteractions();
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    setInteractions() {
        this.subscriptionTokens.push(
            PubSub.subscribe(Topics.UPDATE_TASK_ELEMENT, (msg, id) => {this.handleUpdateRequest(id)})
        )
    }

    delete() {
        this.remove();
        this.task.unlink();
        PubSub.publish(Topics.REMOVE_TASK, this.task.id);
    }

    remove() {
        this.subscriptionTokens.forEach((token) => PubSub.unsubscribe(token));
        this.view.remove();
    }

    toggle() {
        this.task.toggleDone();
    }

    handleUpdateRequest(id) {
        if (id !== this.task.id) {return;}
        this.update();
    }

    update() {
        this.view.updateState(this.task);
    }

    addEditTaskInput() {
        const element = this.elementFactory.buildTaskEditInput(this.task);
        PubSub.publish(Topics.ADD_POP_UP, element);
    }
}