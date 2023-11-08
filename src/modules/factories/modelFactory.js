import PubSub from "pubsub-js";
import Topics from "../utils/topics";
import Task from "../models/task";
import Project from "../models/project";

export default class ModelFactory {
    constructor() {
        this.setInteractions();
    }
    createTask(data) {
        const task = new Task(data.title, data.description, data.dueDate, data.priority);
        PubSub.publish(Topics.TASK, task);
        return task;
    }

    createProject(data) {
        const project = new Project(data.name, data.items);
        PubSub.publish(Topics.PROJECT, project);
        return project;
    }

    setInteractions() {
        PubSub.subscribe(Topics.CREATE_TASK, (msg, data) => {this.createTask(data)});
        PubSub.subscribe(Topics.CREATE_PROJECT, (msg, data) => {this.createProject(data)});
    }
}