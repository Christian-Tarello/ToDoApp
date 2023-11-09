import PubSub from "pubsub-js";
import Topics from "../utils/topics";
import Task from "../models/task";
import Project from "../models/project";
import ChecklistItem from "../models/checklistItem";

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

    static createChecklistItem(description) {
        const item = new ChecklistItem(description);
        PubSub.publish(Topics.CHECKLIST_ITEM, item);
        return item;
    }
}