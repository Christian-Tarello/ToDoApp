import CollectionWrapper from "../utils/collectionWrapper";

export default class ProjectCollection {
    constructor(items) {
        this.collection = new CollectionWrapper(items);
        this.items.forEach((item) => item.link(this));
    }

    get items() {
        return this.collection.items;
    }

    add(item) {
        this.collection.add(item);
        item.link(this);
    }

    remove(item) {
        this.collection.remove(item);
    }

    getTasksDueToday() {
        const tasks = this.items.reduce((total, item) => {
            const due = item.getDueToday();
            if (due) {
                total.push(...due);
            }
        }, []);
        return tasks;
    }

    getTasksDueThisWeek() {
        const tasks = this.items.reduce((total, item) => {
            const due = item.getDueThisWeek();
            if (due) {
                total.push(...due);
            }
        }, []);
        return tasks;
    }
}