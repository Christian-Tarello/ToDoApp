export default class ChecklistItem {
    constructor(description) {
        this.description = description;
        this.isDone = false;
        
        this.checklist = undefined;
    }

    getData() {
        return {
            description: this.description,
            isDone: this.isDone
        };
    }

    unlink() {
        if (this.checklist === undefined) {return;}
        this.checklist.remove(this);
    }

    link(checklist) {
        this.unlink();
        this.checklist = checklist;
    }

    setDone() {
        this.isDone = true;
    }

    setUndone() {
        this.isDone = false;
    }

    toggleDone() {
        if (this.isDone) {
            this.setUndone();
        } else {
            this.setDone();
        }
    }
}