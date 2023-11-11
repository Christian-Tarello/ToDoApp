import Topics from "../utils/topics";
import PubSub from "pubsub-js";
import TaskFields from "../utils/taskFields";

export default class TaskEditInputController {
    constructor(task) {
        this.task = task;
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    remove() {
        this.view.remove();
    }

    processTaskEditSubmission(e) {
        const data = new FormData(e.target);
        const title = data.get(TaskFields.TITLE);
        const description = data.get(TaskFields.DESCRIPTION);
        const priority = data.get(TaskFields.PRIORITY);
        const dueDate = data.get(TaskFields.DUE_DATE);

        this.task.title = title;
        this.task.description = description;
        this.task.priority = priority;
        this.task.dueDate = dueDate;

        PubSub.publish(Topics.UPDATE_TASK_ELEMENT, this.task.id);
        this.remove();
    }
}