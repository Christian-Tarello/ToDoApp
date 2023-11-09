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
    }

    unlink() {
        if (this.project) {
            this.project.removeById(this.id);
        }
    }

    linkProject(project) {
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
}