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
}

/* In case it ever becomes a factory function instead */
export default function createProject(...args) {
    return new Project(...args);
}