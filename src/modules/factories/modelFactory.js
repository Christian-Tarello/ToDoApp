import Task from "../models/task";
import Project from "../models/project";
import ChecklistItem from "../models/checklistItem";

export default class ModelFactory {
    static createTask(title, description, dueDate, priority) {
        const task = new Task(title, description, dueDate, priority);
        return task;
    }

    static createProject(name, items) {
        const project = new Project(name, items);
        return project;
    }

    static createChecklistItem(description) {
        const item = new ChecklistItem(description);
        return item;
    }
}