export default class ChecklistView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    createContainer() {
        const element = document.createElement('div');
        return element;
    }

    createItemsHook() {
        this.itemsHook = document.createElement('ul');
        return this.itemsHook;
    }

    createAddItemButton() {
        this.addItemButton = document.createElement('button');
        this.addItemButton.setAttribute('type', 'button');
        this.addItemButton.innerText = "+";
        return this.addItemButton;
    }

    create() {
        const element = this.createContainer();
        element.append(
            this.createItemsHook(),
            this.createAddItemButton()
        );
        return element;
    }

    setInteractions() {
        this.addItemButton.addEventListener('click', () => {this.controller.addEmptyItem()});
    }

    build() {
        this.element = this.create();
        this.controller.updateView();
        this.setInteractions();
        return this.element;
    }

    addItem(element) {
        this.itemsHook.append(element);
    }

    replaceItems(elements) {
        this.itemsHook.replaceChildren(...elements);
    }
}