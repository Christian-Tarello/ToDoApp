import CollectionButtonTemplate from "../templates/collectionButtonTemplate";

export default class NoEditCollectionButtonView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.template = CollectionButtonTemplate;
    }

    create() {
        const structure = CollectionButtonTemplate.create();
        this.element = structure.element;
        this.button = structure.button;
        structure.deleteButton.remove();
    }

    setInteractions() {
        this.button.addEventListener('click', () => {this.controller.display()});
    }

    build() {
        this.create();
        this.controller.updateView();
        this.setInteractions();
        return this.element;
    }

    changeName(name) {
        this.button.innerText = name;
    }
}