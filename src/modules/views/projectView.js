export default class ProjectView {
    constructor(controller, addTaskButton) {
        this.addTaskButton = addTaskButton;
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    build() {
        this.element = document.createElement('div');
        this.element.append(document.createElement('div'));
        this.element.append(this.addTaskButton);
        return this.element;
    }

    addItem(element) {
        this.element.firstChild.append(element);
    }
}