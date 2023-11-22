export default class ProjectView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
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

    setInteractions() {
        this.addTaskInputButton.addEventListener('click', () => {this.controller.addTaskInput()});
    }

    build() {
        this.element = document.createElement('div');
        this.element.append(this.createTasksHook());
        this.element.append(this.createAddTaskInputButton());
        this.updateState();
        this.setInteractions();
        return this.element;
    }

    replaceItems(elements) {
        this.tasksHook.replaceChildren(...elements);
    }

    updateState() {
        this.controller.update();
    }

    addItem(element) {
        this.tasksHook.append(element);
    }
}