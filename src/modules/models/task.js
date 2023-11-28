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
        this.observers.push(new WeakRef(observer));
    }

    removeObserver(observer) {
        const index = this.observers.findIndex((ref) => ref.deref() === observer);
        this.observers.splice(index, 1);
    }

    updateObservers() {
        this.observers.forEach((ref, index) => {
            const observer = ref.deref();
            if (observer) {
                observer.update();
            } else {
                this.observers.splice(index, 1);
            }
        }
        );
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