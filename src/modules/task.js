import CollectionWrapper from "./collectionWrapper";
import createCounter from "./counter";

const counter = createCounter();

class Task {
    constructor(title, description, dueDate, priority) {
        this.id = counter();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }

    hasChecklist() {
        return this.checklist !== undefined;
    }

    createChecklist() {
        if (this.hasChecklist()) return;
        this.checklist = new CollectionWrapper();
    }

    getChecklist() {
        return this.checklist;
    }

    deleteChecklist() {
        this.checklist = undefined;
    }
}

/* In case it ever becomes a factory function instead */
export default function createTask(...args) {
    return new Task(...args);
}