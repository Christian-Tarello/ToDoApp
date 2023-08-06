class Project {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task)
    }

    insertTask(task, position) {
        this.tasks.splice(position, 0, task)
    }

    removeTaskByName(taskName) {
        const index = this.tasks.find((task) => task.name === taskName);
        this.removeTaskById(index);
    }

    removeTaskByPosition(position) {
        this.tasks.splice(position, 1);
    }

    getTaskByName(taskName) {
        const index = this.tasks.find((task) => task.name === taskName);
        return this.getTaskByIndex(index);
    }

    getTaskByPosition(position) {
        return this.tasks(position);
    }
}

/* In case it ever becomes a factory function instead */
export default function createProject(...args) {
    return new Project(...args);
}