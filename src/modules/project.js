class Project {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
}

/* In case it ever becomes a factory function instead */
export default function createProject(...args) {
    return new Project(...args);
}