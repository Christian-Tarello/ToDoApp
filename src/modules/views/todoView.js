import CollectionButtonTemplate from "../templates/collectionButtonTemplate";
import ProjectCollectionTemplate from "../templates/projectCollectionTemplate";

export default class TodoView {
    constructor(controller, projectCollectionElement) {
        this.controller = controller;
        this.controller.setView(this);
        this.projectCollectionElement = projectCollectionElement;
    }

    createContainer() {
        const element = document.createElement('div');
        element.classList.add('todoCollection');
        return element;
    }

    createButton(name) {
        const obj = CollectionButtonTemplate.create();
        obj.button.innerText = name;
        obj.deleteButton.remove();
        return obj.element
    }

    createDefaultButtons() {
        this.inboxButton = this.createButton('Inbox');
        this.todayButton = this.createButton('Today');
        this.thisWeekButton = this.createButton('This Week');
        return [this.inboxButton, this.todayButton, this.thisWeekButton];
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
        this.contentHook.append(...this.createDefaultButtons())
        element.append(
            defaultCollection,
            this.projectCollectionElement
        );
        return element;
    }

    setInteractions() {
        this.inboxButton.addEventListener('click', () => {this.controller.displayInbox()});
        this.todayButton.addEventListener('click', () => {this.controller.displayDueToday()});
        this.thisWeekButton.addEventListener('click', () => {this.controller.displayDueThisWeek()});
    }

    build() {
        this.element = this.create();
        this.setInteractions();
        return this.element;
    }

    replaceItems(elements) {
        this.contentHook.replaceChildren(...elements);
    }
}
