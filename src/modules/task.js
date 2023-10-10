import CollectionWrapper from "./collectionWrapper";
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

        this.checklist = new CollectionWrapper();
    }

    get id() {
        return this.id;
    }

    set id(id) {
        return;
    }

    hasEmptyChecklist() {
        return this.checklist.items.length === 0;
    }

    cleanChecklist() {
        this.checklist = new CollectionWrapper();
    }
}

/* In case it ever becomes a factory function instead */
export default function createTask(...args) {
    return new Task(...args);
}