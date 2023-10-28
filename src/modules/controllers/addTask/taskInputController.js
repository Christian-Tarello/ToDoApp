import PubSub from "pubsub-js";
import Messages from "../../utils/messages";
import TaskFields from "../../utils/taskFields";

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

        PubSub.publish(Messages.CREATE_TASK, {title, description, priority, dueDate});
        PubSub.publish(Messages.REMOVE_TASK_INPUT);
        this.remove();
    }
}