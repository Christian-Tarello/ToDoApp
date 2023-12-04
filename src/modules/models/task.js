import createCounter from "../utils/counter";
import Priority from "../utils/priority";
import EventManager from "../utils/eventManager";

const counter = createCounter();

export default class Task {
    constructor(title, description, dueDate, priority = Priority.UNSET, checklist) {
        this.id = counter();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.isDone = false;

        this.project = undefined;
        this.eventManager = new EventManager();
    }

    unlink() {
        if (this.project) {
            this.project.remove(this);
        }
    }

    link(project) {
        this.unlink();
        this.project = project;
    }

    setDone() {
        this.isDone = true;
        this.checklist.setDone();
    }

    setUndone() {
        this.isDone = false;
        this.checklist.setUndone();
    }

    toggleDone() {
        if (this.isDone) {
            this.setUndone();
        } else {
            this.setDone();
        }
    }

    addObserver(observer) {
        this.eventManager.addObserver(observer);
    }

    removeObserver(observer) {
        this.eventManager.removeObserver(observer);
    }

    updateObservers() {
        this.eventManager.updateObservers();
    }

    setState(object) {
        Object.entries(object).forEach(
            ([key, value] = entry) => {
                this[key] = value;
            }
        );
        this.updateObservers();
    }
}