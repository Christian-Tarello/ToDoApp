export default class ProjectView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    createContainer() {
        const element = document.createElement('div');
        return element;
    }

    createAddTaskInputButton() {
        this.addTaskInputButton = document.createElement("button");
        this.addTaskInputButton.setAttribute("type", "button");
        this.addTaskInputButton.innerText = 'Add Task +';
        return this.addTaskInputButton;
    }

    createTasksHook() {
        this.tasksHook = document.createElement('div');
        return this.tasksHook;
    }

    create() {
        const element = this.createContainer();
        element.append(this.createTasksHook());
        element.append(this.createAddTaskInputButton());
        return element;
    }

    setInteractions() {
        this.addTaskInputButton.addEventListener('click', () => {this.controller.addTaskInput()});
    }

    build() {
        this.element = this.create();
        this.controller.updateView();
        this.setInteractions();
        return this.element;
    }

    replaceItems(elements) {
        this.tasksHook.replaceChildren(...elements);
    }

    addItem(element) {
        this.tasksHook.append(element);
    }
}