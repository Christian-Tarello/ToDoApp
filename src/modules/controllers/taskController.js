import PubSub from "pubsub-js";
import Messages from "../utils/messages";

export default class TaskController {
    constructor(task) {
        this.task = task;
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    getData() {
        const data = {
            title: this.task.title,
            description: this.task.description,
            priority: this.task.priority,
            dueDate: this.task.dueDate,
            isDone: this.task.isDone
        }
        return data;
    }

    remove() {
        this.view.remove();
        PubSub.publish(Messages.REMOVE_TASK, this.task.id)
    }

    toggle() {
        this.task.toggleDone();
    }

    addEditTaskInput() {
        PubSub.publish(Messages.ADD_EDIT_TASK_INPUT, this.task.id);
    }
}