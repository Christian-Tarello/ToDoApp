export default class CollectionButtonView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
    }

    createContainer() {
        const container = document.createElement('div');
        return container;
    }

    createButton() {
        this.button = document.createElement('button');
        this.button.setAttribute('type', 'button');
        return this.button;
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
            this.createButton(),
            this.createDeleteButton()
        );
        return element;
    }

    setInteractions() {
        this.button.addEventListener('click', () => {this.controller.display()});
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

    changeName(name) {
        this.button.innerText = name;
    }
}