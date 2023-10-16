export default class ProjectView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.addTaskView = undefined;
        this.element = undefined;
    }

    setAddTaskView(view) {
        this.addTaskView = view;
        this.controller.setAddTaskView(view);
    }

    build() {
        this.element = document.createElement("div");
        this.addItem(this.addTaskView.build());
        return this.element;
    }

    addItem(element) {
        this.element.append(element);
    }
}