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

    changeTitle(title) {
        this.task.title = title;
    }

    changeDescription(description) {
        this.task.description = description;
    }

    changePriority(priority) {
        this.task.priority = priority;
    }

    changeDueDate(date) {
        this.task.dueDate = date;
    }

    updateView() {
        this.view.setDone(this.task.isDone);
        this.view.setTitle(this.task.title);
        this.view.setDescription(this.task.description);
        this.view.setPriority(this.task.priority);
        this.view.setDueDate(this.task.dueDate);
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