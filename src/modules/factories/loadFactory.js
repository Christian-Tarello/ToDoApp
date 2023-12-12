export default class LoadFactory {
    constructor(modelFactory) {
        this.modelFactory = modelFactory;
    }

    loadChecklistItem(data) {
        const item = this.modelFactory.createChecklistItem(data.description);
        if (data.isDone) {item.setDone()}
        return item;
    }

    loadChecklist(data) {
        const items = data.items.map((dataItem) => this.loadChecklistItem(dataItem));
        const checklist = this.modelFactory.createChecklist(items);
        return checklist;
    }

    loadTask(data) {
        const checklist = this.loadChecklist(data.checklist);
        const task = this.modelFactory.createTask(data.title, data.description, data.dueDate, data.priority, checklist);
        if (data.isDone) {task.setDone()}
        return task;
    }

    loadProject(data) {
        const items = data.items.map((dataItem) => this.loadTask(dataItem));
        const project = this.modelFactory.createProject(data.name, items);
        return project;
    }

    loadProjectCollection(data) {
        const items = data.items.map((dataItem) => this.loadProject(dataItem));
        const projectCollection = this.modelFactory.createProjectCollection(items);
        return projectCollection;
    }

    loadTodo(data) {
        const projectCollection = this.loadProjectCollection(data.projectCollection);
        const inbox = this.loadProject(data.inbox);
        const todo = this.modelFactory.createTodo(inbox, projectCollection);
        return todo;
    }
}