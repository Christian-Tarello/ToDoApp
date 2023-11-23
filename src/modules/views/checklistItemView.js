export default class ChecklistItemView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    createContainer() {
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

    create() {
        const element = this.createContainer();
        element.append(
            this.createDoneToggle(),
            this.createDescriptionInput()
        );
        return element
    }

    setInteractions() {
        this.descriptionInput.addEventListener('change', (e) => {this.controller.changeDescription(e.target.value)});
        this.doneToggle.addEventListener('change', (e) => {this.controller.toggle()});
    }
    
    build() {
        this.element = this.create();
        this.controller.updateView();
        this.setInteractions();
        return this.element;
    }

    setDescription(text) {
        this.descriptionInput.setAttribute('value', `${text}`);
    }

    setCheckboxState(isOn) {
        if (isOn) {
            this.doneToggle.setAttribute('checked', '');
        } else {
            this.doneToggle.removeAttribute('checked', '');
        }
    }
}