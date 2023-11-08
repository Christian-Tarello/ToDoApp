import PubSub from "pubsub-js";
import Topics from "../utils/topics";

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

    delete() {
        this.remove();
        PubSub.publish(Topics.REMOVE_TASK, this.task.id)
    }

    remove() {
        this.view.remove();
    }

    toggle() {
        this.task.toggleDone();
    }

    addEditTaskInput() {
        // ...
    }
}