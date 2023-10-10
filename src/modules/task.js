import Checklist from "./checklist";
import createCounter from "./counter";
import Priority from "./priority";

const counter = createCounter();

class Task {
    constructor(title, description, dueDate, priority = Priority.UNSET) {
        this.id = counter();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;

        this.checklist = new Checklist();
    }

    get id() {
        return this.id;
    }

    set id(id) {
        return;
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

    cleanChecklist() {
        this.checklist = new Checklist();
    }
}

/* In case it ever becomes a factory function instead */
export default function createTask(...args) {
    return new Task(...args);
}