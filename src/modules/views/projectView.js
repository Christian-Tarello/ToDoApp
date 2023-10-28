export default class ProjectView {
    constructor(controller, addTaskView) {
        this.addTaskView = addTaskView;
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    build() {
        this.element = document.createElement('div');
        this.element.append(document.createElement('div'));
        this.element.append(this.addTaskView.build());
        return this.element;
    }

    addItem(element) {
        this.element.firstChild.append(element);
    }
}