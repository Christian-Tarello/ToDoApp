import PubSub from "pubsub-js";
import Messages from "../../utils/messages";
import TaskView from "../../views/taskView";
import TaskController from "./taskController";

export default class ProjectController {
    constructor(view) {
        this.view = view;
        this.project = this.view.project;
        this.setInteractions();
    }

    setInteractions() {
        PubSub.subscribe(Messages.ADD_TASK, (msg, task) => {this.addTask(task)});
        PubSub.subscribe(Messages.REMOVE_TASK, (msg, id) => {this.removeTask(id)});
    }

    addTask(task) {
        // Create a task using a view and add it to the view
        this.project.add(task);
        const taskController = new TaskController(new TaskView(task));
        this.view.addItem(taskController.view.build());
        console.log(this.project);
    }

    removeTask(id) {
        this.project.removeById(id);
    }
}