export default class TodoList {
    constructor(project, projectCollection) {
        this.inbox = project;
        this.projectCollection = projectCollection;
    }

    getTasksDueToday() {
        const due = [];
        due.push(...this.inbox.getDueToday(), ...this.projectCollection.getTasksDueToday());
        return due;
    }

    getTasksDueThisWeek() {
        const due = [];
        due.push(...this.inbox.getDueThisWeek(), ...this.projectCollection.getTasksDueThisWeek());
        return due;
    }
}