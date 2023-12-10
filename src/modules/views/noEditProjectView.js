import ProjectTemplate from "../templates/projectTemplate";

export default class NoEditProjectView {
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

        this.nameInput.setAttribute('readonly', '');
        structure.deleteButton.remove();

        this.tasksHook = structure.tasksHook;
        this.addTaskButton = structure.addTaskButton;
    }

    setInteractions() {
        this.addTaskButton.addEventListener('click', () => {this.controller.addTaskInput()});
    }

    build() {
        this.create();
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

    setName(name) {
        this.nameInput.setAttribute('value', name);
    }
}