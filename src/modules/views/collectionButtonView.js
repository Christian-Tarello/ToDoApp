export default class CollectionButtonView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
    }

    createButton() {
        this.button = document.createElement('button');
        this.button.setAttribute('type', 'button');
        return this.button;
    }

    create() {
        return this.createButton();
    }

    setInteractions() {
        this.button.addEventListener('click', () => {this.controller.display()})
    }

    build() {
        this.element = this.create();
        this.controller.updateView();
        this.setInteractions();
        return this.element;
    }

    changeName(name) {
        this.button.innerText = name;
    }
}