import CollectionButtonTemplate from "../templates/collectionButtonTemplate";
import ProjectCollectionTemplate from "../templates/projectCollectionTemplate";

export default class TodoView {
    constructor(controller, projectCollectionElement) {
        this.controller = controller;
        this.controller.setView(this);
        this.projectCollectionElement = projectCollectionElement;
    }

    createContainer() {
        const container = document.createElement('div');
        return container;
    }

    createDefaultCollection() {
        const obj = ProjectCollectionTemplate.create();
        this.defaultCollection = obj.element;
        this.contentHook = obj.contentHook;
        obj.addButton.remove();
        return this.defaultCollection;
    }

    create() {
        const element = this.createContainer();
        const defaultCollection = this.createDefaultCollection();
        element.append(
            defaultCollection,
            this.projectCollectionElement
        );
        return element;
    }

    build() {
        this.element = this.create();
        this.controller.updateView();
        return this.element;
    }

    replaceItems(elements) {
        this.contentHook.replaceChildren(...elements);
    }
}
