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
    }

    load() {
        const elements = this.project.items.map(
            (item) => {
                return this.elementFactory.buildTask(item);
            }
        )
        this.view.replaceItems(elements);
    }

    update() {
        this.load();
    }

    addTask(task) {        
        this.project.add(task);
        const element = this.elementFactory.buildTask(task);
        this.view.addItem(element);
        console.log(this.project);
    }

    addTaskInput() {
        const element = this.elementFactory.buildTaskInput();
        PubSub.publish(Topics.ADD_POP_UP, element);
    }
}