import PubSub from "pubsub-js";
import Messages from "../../utils/messages";

export default class TaskController {
    constructor(view) {
        this.view = view;
        this.task = view.task;
        this.subTokens = [];
        this.setInteractions();
    }

    setInteractions() {
        this.subTokens.push(
            PubSub.subscribe(Messages.REMOVE_TASK, (msg, id) => {this.removeTask(id)}),
            PubSub.subscribe(Messages.TOGGLE_TASK, (msg, id) => {this.toggleTask(id)}),
        )
    }

    removeTask(id) {
        if (id !== this.task.id) {return;}
        this.subTokens.forEach((subToken) => PubSub.unsubscribe(subToken));
        this.subTokens = [];
        this.view.remove();
    }

    toggleTask(id) {
        if (id !== this.task.id) {return;}
        this.task.toggleDone();
    }
}