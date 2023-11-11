export default class ChecklistView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    build() {
        this.element = this.createTemplate();
        this.updateState();
        this.setInteractions();
        return this.element;
    }
    
    createTemplate() {
        const element = this.createMainNode();
        element.append(
            this.createItemsHook(),
            this.createAddItemButton()
        );
        return element;
    }

    createMainNode() {
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

    addItem(element) {
        this.itemsHook.append(element);
    }

    updateState() {
        this.controller.load();
    }

    replaceItems(elements) {
        this.itemsHook.replaceChildren(...elements);
    }

    setInteractions() {
        this.addItemButton.addEventListener('click', () => {this.controller.addEmptyItem()});
    }
}