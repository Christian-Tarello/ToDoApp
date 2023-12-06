import CollectionButtonTemplate from "../templates/collectionButtonTemplate";

export default class CollectionButtonView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.template = CollectionButtonTemplate;
    }

    createContainer() {
        const container = this.template.createContainer();
        return container;
    }

    createButton() {
        this.button = this.template.createButton();
        return this.button;
    }

    createDeleteButton() {
        this.deleteButton = this.template.createDeleteButton();
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