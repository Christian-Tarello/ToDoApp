import ProjectCollectionTemplate from "../templates/projectCollectionTemplate";

export default class ProjectCollectionView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.template = ProjectCollectionTemplate;
    }

    create() {
        const structure = this.template.create();
        this.element = structure.element;
        this.addButton = structure.addButton;
        this.contentHook = structure.contentHook;
    }

    setInteractions() {
        this.addButton.addEventListener('click', () => this.controller.createEmptyProject());
    }

    build() {
        this.create();
        this.controller.updateView();
        this.setInteractions();
        return this.element;
    }

    replaceItems(elements) {
        this.contentHook.replaceChildren(...elements);
    }
}