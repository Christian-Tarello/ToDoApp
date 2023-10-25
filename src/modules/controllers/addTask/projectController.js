import PubSub from "pubsub-js";
import Messages from "../../utils/messages";

export default class ProjectController {
    constructor(view) {
        this.view = view;
        this.project = this.view.project;
        this.setInteractions();
    }

    setInteractions() {
        PubSub.subscribe(Messages.ADD_TASK, (msg, task) => {this.addTask(task)});
        PubSub.subscribe(Messages.REMOVE_TASK, (msg, id) => {this.removeTask(id)});
        PubSub.subscribe(Messages.BUILT_TASK, (msg, element) => {this.paintTask(element)});
    }

    addTask(task) {        
        this.project.add(task);
        PubSub.publish(Messages.BUILD_TASK, task.id);
        console.log(this.project);
    }

    paintTask(element) {
        this.view.addItem(element);
    }

    removeTask(id) {
        this.project.removeById(id);
    }
}