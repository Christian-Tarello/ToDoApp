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

    createContentContainer() {
        return ProjectCollectionTemplate.createContainer();
    }

    createInboxButton() {
        const obj = CollectionButtonTemplate.create();

        this.inboxButton = obj.button;
        this.inboxButton.innerText = 'Inbox';

        obj.deleteButton.remove();

        return obj.element;
    }

    createDueTodayButton() {
        const obj = CollectionButtonTemplate.create();

        this.dueTodayButton = obj.button;
        this.dueTodayButton.innerText = 'Today';

        obj.deleteButton.remove();

        return obj.element;
    }

    createDueThisWeekButton() {
        const obj = CollectionButtonTemplate.create();

        this.dueThisWeekButton = obj.button;
        this.dueThisWeekButton.innerText = 'This Week';

        obj.deleteButton.remove();

        return obj.element;
    }

    create() {
        const element = this.createContainer();
        const content = this.createContentContainer();
        content.append(
            this.createInboxButton(),
            this.createDueTodayButton(),
            this.createDueThisWeekButton()
        );
        element.append(
            content,
            this.projectCollectionElement
        );
        return element;
    }

    build() {
        this.element = this.create();
        return this.element;
    }
}
