export default class ChecklistItem {
    constructor(description) {
        this.description = description;
        this.isDone = false;
    }

    setDone() {
        this.isDone = true;
    }

    setUndone() {
        this.isDone = false;
    }
}