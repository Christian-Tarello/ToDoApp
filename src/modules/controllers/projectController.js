import PubSub from "pubsub-js";
import Messages from "../utils/messages";

export default class ProjectController {
    constructor(project, elementFactory) {
        this.elementFactory = elementFactory;
        this.project = project;
        this.setInteractions();
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    setInteractions() {
        PubSub.subscribe(Messages.NEW_TASK, (msg, task) => {this.addTask(task)});
        PubSub.subscribe(Messages.REMOVE_TASK, (msg, id) => {this.removeTask(id)});
    }

    addTask(task) {        
        this.project.add(task);
        this.view.addItem(this.elementFactory.buildTask(task.id));
        console.log(this.project);
    }

    removeTask(id) {
        this.project.removeById(id);
    }
}