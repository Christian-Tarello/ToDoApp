export default class ProjectCollectionView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
    }

    createContainer() {
        const container = document.createElement('div');
        return container;
    }

    createAddButton() {
        this.addButton = document.createElement('button');
        this.addButton.setAttribute('type', 'button');
        this.addButton.innerText = '+ Add Project';
        return this.addButton;
    }

    createContentHook() {
        this.contentHook = document.createElement('div');
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