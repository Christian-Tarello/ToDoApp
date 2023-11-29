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

    createHeaderContainer() {
        const element = document.createElement('div');
        return element;
    }

    createNameInput() {
        this.nameInput = document.createElement('input');
        this.nameInput.setAttribute('type', 'text');
        return this.nameInput;
    }

    createDeleteButton() {
        this.deleteButton = document.createElement('button');
        this.deleteButton.setAttribute('type', 'button');
        this.deleteButton.innerText = 'X';
        return this.deleteButton;
    }

    createTasksHook() {
        this.tasksHook = document.createElement('div');
        return this.tasksHook;
    }

    createAddTaskInputButton() {
        this.addTaskInputButton = document.createElement("button");
        this.addTaskInputButton.setAttribute("type", "button");
        this.addTaskInputButton.innerText = 'Add Task +';
        return this.addTaskInputButton;
    }

    create() {
        const element = this.createContainer();
        const header = this.createHeaderContainer();
        header.append(
            this.createNameInput(),
            this.createDeleteButton()
        );
        element.append(
            header,
            this.createTasksHook(),
            this.createAddTaskInputButton()
        )
        return element;
    }

    setInteractions() {
        this.addTaskInputButton.addEventListener('click', () => {this.controller.addTaskInput()});
        this.nameInput.addEventListener('change', (e) => this.controller.changeName(e.target.value));
        this.deleteButton.addEventListener('click', () => this.controller.delete());
    }

    build() {
        this.element = this.create();
        this.controller.updateView();
        this.setInteractions();
        return this.element;
    }

    remove() {
        this.element.remove();
    }

    replaceItems(elements) {
        this.tasksHook.replaceChildren(...elements);
    }

    addItem(element) {
        this.tasksHook.append(element);
    }

    setName(name) {
        this.nameInput.setAttribute('value', name);
    }
}