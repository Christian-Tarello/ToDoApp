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
        const container = CollectionButtonTemplate.createContainer();
        this.inboxButton = CollectionButtonTemplate.createButton();
        this.inboxButton.innerText = 'Inbox';
        container.append(this.inboxButton);
        return container;
    }

    createDueTodayButton() {
        const container = CollectionButtonTemplate.createContainer();
        this.dueTodayButton = CollectionButtonTemplate.createButton();
        this.dueTodayButton.innerText = 'Today';
        container.append(this.dueTodayButton);
        return container;
    }

    createDueThisWeekButton() {
        const container = CollectionButtonTemplate.createContainer();
        this.dueThisWeekButton = CollectionButtonTemplate.createButton();
        this.dueThisWeekButton.innerText = 'This Week';
        container.append(this.dueThisWeekButton);
        return container;
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
}
