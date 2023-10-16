export default class TaskInputController {
    constructor(controller) {
        this.view = undefined;
        this.controller = controller;
    }

    setView(view) {
        this.view = view;
    }

    removeTaskInput(e) {
        e.preventDefault();
        this.controller.removeTaskInput();
    }

    addTask(e) {
        const data = new FormData(this.view.element);
        this.removeTaskInput(e);
        this.controller.addTask(data);
    }
}