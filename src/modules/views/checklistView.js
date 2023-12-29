export default class ChecklistView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    createContainer() {
        const element = document.createElement('div');
        element.classList.add('checklist');
        return element;
    }

    createItemsHook() {
        this.itemsHook = document.createElement('ul');
        this.itemsHook.classList.add('checklist-itemList');
        return this.itemsHook;
    }

    createAddItemButton() {
        this.addItemButton = document.createElement('button');
        this.addItemButton.classList.add('checklist-addButton');
        this.addItemButton.setAttribute('type', 'button');
        this.addItemButton.innerText = "Add Item +";
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

    replaceItems(elements) {
        this.itemsHook.replaceChildren(...elements);
    }
}