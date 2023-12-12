import TaskFields from "../utils/taskFields";

export default class TaskInputController {
    constructor(project, taskFactory) {
        this.project = project;
        this.taskFactory = taskFactory;
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

        const task = this.taskFactory(title, description, dueDate, priority);
        this.project.add(task);

        this.remove();
    }
}