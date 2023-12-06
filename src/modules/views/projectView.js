import ProjectTemplate from "../templates/projectTemplate";

export default class ProjectView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
        
        this.template = ProjectTemplate;
    }

    createContainer() {
        const element = this.template.createContainer();
        return element;
    }

    createHeaderContainer() {
        const element = this.template.createHeaderContainer();
        return element;
    }

    createNameInput() {
        this.nameInput = this.template.createNameInput();
        return this.nameInput;
    }

    createDeleteButton() {
        this.deleteButton = this.template.createDeleteButton();
        return this.deleteButton;
    }

    createTasksHook() {
        this.tasksHook = this.template.createTasksHook()
        return this.tasksHook;
    }

    createAddTaskInputButton() {
        this.addTaskInputButton = this.template.createAddTaskInputButton();
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