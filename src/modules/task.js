class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }
}

/* In case it ever becomes a factory function instead */
export default function createTask(...args) {
    return new Task(...args);
}