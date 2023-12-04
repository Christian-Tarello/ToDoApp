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

    createDeleteButton() {
        this.deleteButton = document.createElement('button');
        this.deleteButton.setAttribute('type', 'button');
        this.deleteButton.innerText = 'X';
        return this.deleteButton;
    }

    create() {
        const element = this.createContainer();
        element.append(
            this.createDoneToggle(),
            this.createDescriptionInput(),
            this.createDeleteButton()
        );
        return element
    }

    setInteractions() {
        this.descriptionInput.addEventListener('change', (e) => {this.controller.changeDescription(e.target.value)});
        this.doneToggle.addEventListener('change', (e) => {this.controller.toggle()});
        this.deleteButton.addEventListener('click', () => {this.controller.delete()});
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