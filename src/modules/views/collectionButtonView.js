import CollectionButtonTemplate from "../templates/collectionButtonTemplate";

export default class CollectionButtonView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.template = CollectionButtonTemplate;
    }

    create() {
        const structure = CollectionButtonTemplate.create();
        this.element = structure.element;
        this.button = structure.button;
        this.deleteButton = structure.deleteButton;
    }

    setInteractions() {
        this.button.addEventListener('click', () => {this.controller.display()});
        this.deleteButton.addEventListener('click', () => {this.controller.delete()});
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

    changeName(name) {
        this.button.innerText = name;
    }
}