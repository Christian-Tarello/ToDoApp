import PubSub from "pubsub-js";
import Messages from "../utils/messages";
import Task from "../models/task";
import Project from "../models/project";

export default class ModelFactory {
    constructor() {
        this.setInteractions();
    }
    createTask(data) {
        const task = new Task(data.title, data.description, data.dueDate, data.priority);
        PubSub.publish(Messages.NEW_TASK, task);
        return task;
    }

    createProject(data) {
        const project = new Project(data.name, data.items);
        PubSub.publish(Messages.NEW_PROJECT, project);
        return project;
    }

    setInteractions() {
        PubSub.subscribe(Messages.CREATE_TASK, (msg, data) => {this.createTask(data)});
        PubSub.subscribe(Messages.CREATE_PROJECT, (msg, data) => {this.createProject(data)});
    }
}