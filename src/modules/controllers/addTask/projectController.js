import TaskInputController from "./taskInputController";
import TaskInputView from "../../views/taskInputView";

export default class ProjectController {
    constructor() {
        this.view = undefined;
        this.addTaskView = undefined;
        this.taskInputView = undefined;
    }

    setView(view) {
        this.view = view;
    }

    setAddTaskView(view) {
        this.addTaskView = view;
    }

    addTaskInput() {
        const taskInputController = new TaskInputController(this);
        this.taskInputView = new TaskInputView(taskInputController);
        this.addTaskView.disable();
        this.view.addItem(this.taskInputView.build());
    }

    removeTaskInput() {
        // Removes all references to it so that it gets garbage collected sooner
        this.taskInputView.remove();
        this.taskInputView = undefined;
        this.addTaskView.enable();
    }

    addTask(task) {
        // Create a task using a view and add it to the view
    }

    

    

}