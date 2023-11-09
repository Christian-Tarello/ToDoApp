import PubSub from "pubsub-js";
import Topics from "../utils/topics";

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
        PubSub.subscribe(Topics.TASK, (msg, task) => {this.addTask(task)});
        PubSub.subscribe(Topics.REMOVE_TASK_ELEMENT, (msg, id) => {this.removeTask(id)});
    }

    addTask(task) {        
        this.project.add(task);
        const element = this.elementFactory.buildTask(task);
        this.view.addItem(element);
        console.log(this.project);
    }

    removeTask(id) {
        this.project.removeById(id);
    }
}