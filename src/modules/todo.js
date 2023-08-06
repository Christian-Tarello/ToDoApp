class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }
}

/* In case it ever becomes a factory function instead */
export default function createToDo(...args) {
    return new ToDo(...args);
}