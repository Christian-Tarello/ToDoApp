import ProjectTemplate from "../templates/projectTemplate";

export default class ProjectView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
        
        this.template = ProjectTemplate;
    }

    create() {
        const structure = ProjectTemplate.create();
        this.element = structure.element;
        this.nameInput = structure.nameInput;
        this.deleteButton = structure.deleteButton;
        this.tasksHook = structure.tasksHook;
        this.addTaskButton = structure.addTaskButton;
    }

    setInteractions() {
        this.addTaskButton.addEventListener('click', () => {this.controller.addTaskInput()});
        this.nameInput.addEventListener('change', (e) => this.controller.changeName(e.target.value));
        this.deleteButton.addEventListener('click', () => this.controller.delete());
    }

    build() {
        this.create();
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