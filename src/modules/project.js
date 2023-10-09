import CollectionWrapper from "./collectionWrapper";

class Project extends CollectionWrapper {
    constructor(name, items) {
        super(items);
        this.name = name;
    }

    getDueToday() {
        // Return an array of tasks due today
        return;
    }

    getDueThisWeek() {
        // Return an array of tasks due this week
        return;
    }

    getById(id) {
        return this.items.find((item) => item.id === id);
    }

    removeById(id) {
        const item = this.getById(id);
        const position = this.items.indexOf(item);
        this.remove(position);
    }
}

/* In case it ever becomes a factory function instead */
export default function createProject(...args) {
    return new Project(...args);
}