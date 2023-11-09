export default class ChecklistItemView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    build() {
        this.element = this.createTemplate();
        this.updateState();
        this.setInteractions();
        return this.element;
    }

    createTemplate() {
        const element = this.createMainNode();
        element.append(
            this.createDoneToggle(),
            this.createDescriptionInput()
        );
        return element
    }

    createMainNode() {
        const element = document.createElement('li');
        return element;
    }

    createDescriptionInput() {
        this.descriptionInput = document.createElement('input');
        this.descriptionInput.setAttribute('type', 'text');
        return this.descriptionInput;
    }

    createDoneToggle() {
        this.doneToggle = document.createElement('input');
        this.doneToggle.setAttribute('type', 'checkbox');
        return this.doneToggle;
    }

    updateState() {
        const data = this.controller.getData();
        this.descriptionInput.setAttribute('value', `${data.description}`);
        if (data.isDone) {
            this.doneToggle.setAttribute('checked', '');
        }
    }

    setInteractions() {
        this.descriptionInput.addEventListener('change', (e) => {this.controller.changeDescription(e.target.value)});
        this.doneToggle.addEventListener('change', (e) => {this.controller.toggle()});
    }
}