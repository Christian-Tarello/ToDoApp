import ProjectCollectionTemplate from "../templates/projectCollectionTemplate";

export default class ProjectCollectionView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.template = ProjectCollectionTemplate;
    }

    createContainer() {
        return this.template.createContainer();
    }

    createAddButton() {
        this.addButton = this.template.createAddButton();
        return this.addButton;
    }

    createContentHook() {
        this.contentHook = this.template.createContentHook();
        return this.contentHook;
    }

    create() {
        const element = this.createContainer();
        element.append(
            this.createContentHook(),
            this.createAddButton()
        )
        return element;
    }

    setInteractions() {
        this.addButton.addEventListener('click', () => this.controller.createEmptyProject());
    }

    build() {
        this.element = this.create();
        this.controller.updateView();
        this.setInteractions();
        return this.element;
    }

    replaceItems(elements) {
        this.contentHook.replaceChildren(...elements);
    }
}