import Task from "../models/task";
import Project from "../models/project";
import ChecklistItem from "../models/checklistItem";
import Checklist from "../models/checklist";
import ProjectCollection from "../models/projectCollection";
import TodoList from "../models/todoList";

export default class ModelFactory {
    static createChecklist(items) {
        const checklist = new Checklist(items);
        return checklist;
    }

    static createChecklistItem(description) {
        const item = new ChecklistItem(description);
        return item;
    }

    static createTask(title, description, dueDate, priority, checklist) {
        if (!checklist) {
            checklist = ModelFactory.createChecklist();
        }
        const task = new Task(title, description, dueDate, priority, checklist);
        return task;
    }

    static createProject(name, items) {
        const project = new Project(name, items);
        return project;
    }

    static createProjectCollection(items) {
        const projectCollection = new ProjectCollection(items);
        return projectCollection;
    }

    static createTodo(project, projectCollection) {
        const todo = new TodoList(project, projectCollection);
        return todo;
    }
}