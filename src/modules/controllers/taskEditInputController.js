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

        const state = {
            title,
            description,
            priority,
            dueDate,
        }

        this.task.setState(state);
        this.remove();
    }

    update() {
        this.view.setContent(this.task);
    }
}