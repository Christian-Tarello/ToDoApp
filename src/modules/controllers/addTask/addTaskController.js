import PubSub from "pubsub-js";
import Messages from "../../utils/messages";
import TaskInputController from "./taskInputController";
import TaskInputView from "../../views/taskInputView";

export default class AddTaskController {
    constructor(view) {
        this.view = view;
        this.setInteractions();
    }

    enable() {
        this.view.enable();
    }

    disable() {
        this.view.disable();
    }

    addTaskInput() {
        const taskController = new TaskInputController(new TaskInputView());
        PubSub.publish(Messages.ADD_POP_UP, taskController.view);
    }

    setInteractions() {
        PubSub.subscribe(Messages.ADD_TASK_INPUT, () => {this.addTaskInput()});
        PubSub.subscribe(Messages.ADD_TASK_INPUT, () => {this.disable()});
        PubSub.subscribe(Messages.REMOVE_TASK_INPUT, () => {this.enable()});
    }
}