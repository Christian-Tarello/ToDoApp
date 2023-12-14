export default class ProxyFactory {
    constructor(modelFactory, proxyWrapper) {
        this.modelFactory = modelFactory;
        this.proxyWrapper = proxyWrapper;
    }

    createChecklist(items = []) {
        const model = this.modelFactory.createChecklist(this.proxyWrapper(items));
        return this.proxyWrapper(model);
    }

    createChecklistItem(description) {
        const model = this.modelFactory.createChecklistItem(description);
        return this.proxyWrapper(model);
    }

    createTask(title, description, dueDate, priority, checklist) {
        if (!checklist) {
            checklist = this.createChecklist();
        }
        const model = this.modelFactory.createTask(title, description, dueDate, priority, checklist);
        return this.proxyWrapper(model);
    }

    createProject(name, items = []) {
        const model = this.modelFactory.createProject(name, this.proxyWrapper(items));
        return this.proxyWrapper(model);
    }

    createProjectCollection(items = []) {
        const model = this.modelFactory.createProjectCollection(this.proxyWrapper(items));
        return this.proxyWrapper(model);
    }

    createTodo(project, projectCollection) {
        const model = this.modelFactory.createTodo(project, projectCollection);
        return this.proxyWrapper(model);
    }
}