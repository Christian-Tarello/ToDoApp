import PubSub from "pubsub-js";
import Messages from "../../utils/messages";
import TaskFields from "../../utils/taskFields";
import Task from "../../models/task";

export default class TaskInputController {
    constructor(view) {
        this.view = view;
        this.subTokens = [];
        this.setInteractions();
    }

    setInteractions() {
        this.subTokens.push(
            PubSub.subscribe(Messages.REMOVE_TASK_INPUT, () => {this.removeTaskInput()}),
            PubSub.subscribe(Messages.PROCESS_TASK_SUBMISSION, (msg, e) => {this.processTaskSubmission(e)})
        );
    }

    removeTaskInput() {
        this.subTokens.forEach((subToken) => PubSub.unsubscribe(subToken));
        this.subTokens = [];     
        this.view.remove();
    }

    processTaskSubmission(e) {
        const data = new FormData(e.target);
        const title = data.get(TaskFields.TITLE);
        const description = data.get(TaskFields.DESCRIPTION);
        const priority = data.get(TaskFields.PRIORITY);
        const dueDate = data.get(TaskFields.DUE_DATE);
        const task = new Task(title, description, dueDate, priority)

        PubSub.publish(Messages.ADD_TASK, task);
        PubSub.publish(Messages.REMOVE_TASK_INPUT);
    }
}