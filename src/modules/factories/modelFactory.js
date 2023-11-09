import PubSub from "pubsub-js";
import Topics from "../utils/topics";
import Task from "../models/task";
import Project from "../models/project";

export default class ModelFactory {
    static createTask(title, description, dueDate, priority) {
        const task = new Task(title, description, dueDate, priority);
        PubSub.publish(Topics.TASK, task);
        return task;
    }

    static createProject(name, items) {
        const project = new Project(name, items);
        PubSub.publish(Topics.PROJECT, project);
        return project;
    }
}