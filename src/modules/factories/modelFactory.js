import Task from "../models/task";
import Project from "../models/project";
import ChecklistItem from "../models/checklistItem";
import Checklist from "../models/checklist";
import ProjectCollection from "../models/projectCollection";
import TodoList from "../models/todoList";

export default class ModelFactory {
    createChecklist(items) {
        const checklist = new Checklist(items);
        return checklist;
    }

    createChecklistItem(description) {
        const item = new ChecklistItem(description);
        return item;
    }

    createTask(title, description, dueDate, priority, checklist) {
        if (!checklist) {
            checklist = this.createChecklist();
        }
        const task = new Task(title, description, dueDate, priority, checklist);
        return task;
    }

    createProject(name, items) {
        const project = new Project(name, items);
        return project;
    }

    createProjectCollection(items) {
        const projectCollection = new ProjectCollection(items);
        return projectCollection;
    }

    createTodo(project, projectCollection) {
        const todo = new TodoList(project, projectCollection);
        return todo;
    }
}