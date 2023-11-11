import Checklist from "./checklist";
import createCounter from "../utils/counter";
import Priority from "../utils/priority";

const counter = createCounter();

export default class Task {
    constructor(title, description, dueDate, priority = Priority.UNSET) {
        this.id = counter();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;

        this.checklist = new Checklist(this.id);
        this.project = undefined;
        this.observers = [];
    }

    unlink() {
        if (this.project) {
            this.project.removeById(this.id);
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
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    updateObservers() {
        this.observers.forEach((observer) => observer.update());
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