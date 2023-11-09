import PubSub from "pubsub-js";
import Topics from "../utils/topics";
import TaskFields from "../utils/taskFields";
import ModelFactory from "../factories/modelFactory";

export default class TaskInputController {
    constructor() {
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    remove() {
        this.view.remove();
    }

    processTaskSubmission(e) {
        const data = new FormData(e.target);
        const title = data.get(TaskFields.TITLE);
        const description = data.get(TaskFields.DESCRIPTION);
        const priority = data.get(TaskFields.PRIORITY);
        const dueDate = data.get(TaskFields.DUE_DATE);

        const task = ModelFactory.createTask(title, description, priority, dueDate);

        this.remove();
    }
}