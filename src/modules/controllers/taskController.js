export default class TaskController {
    constructor(task, elementFactory, popUpLayer) {
        this.task = task;
        this.task.addObserver(this);
        this.elementFactory = elementFactory;
        this.popUpLayer = popUpLayer;
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    toggle() {
        this.task.toggleDone();
    }

    addEditTaskInput() {
        const element = this.elementFactory.buildTaskEditInput(this.task);
        this.popUpLayer.addPopUp(element, true, true);
    }

    updateView() {
        this.view.setContent(this.task);
    }

    update() {
        this.updateView();
    }

    finalize() {
        this.task.removeObserver(this);
    }

    delete() {
        this.finalize();
        this.task.unlink();
    }
}