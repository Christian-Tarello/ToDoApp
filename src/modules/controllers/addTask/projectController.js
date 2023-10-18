import PubSub from "pubsub-js";
import Messages from "../../utils/messages";
import TaskInputController from "./taskInputController";
import TaskInputView from "../../views/taskInputView";

export default class ProjectController {
    constructor(view) {
        this.view = view;
        this.setInteractions();
    }

    setInteractions() {
        PubSub.subscribe(Messages.ADD_TASK_INPUT, () => {this.addTaskInput()});
        PubSub.subscribe(Messages.ADD_TASK, (msg, task) => {this.addTask(task)});
    }

    addTaskInput() {
        const taskController = new TaskInputController(new TaskInputView());
        this.view.addItem(taskController.view.build());
    }

    addTask(task) {
        // Create a task using a view and add it to the view
        console.log(task);
    }
}