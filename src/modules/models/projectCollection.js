import CollectionWrapper from "../utils/collectionWrapper";
import EventManager from "../utils/eventManager";

export default class ProjectCollection {
    constructor(items) {
        this.collection = new CollectionWrapper(items);
        this.items.forEach((item) => item.link(this));
        this.eventManager = new EventManager();
    }

    get items() {
        return this.collection.items;
    }

    add(item) {
        this.collection.add(item);
        item.link(this);
        this.updateObservers();
    }

    remove(item) {
        this.collection.remove(item);
        this.updateObservers();
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

    addObserver(observer) {
        this.eventManager.addObserver(observer);
    }

    removeObserver(observer) {
        this.eventManager.removeObserver(observer);
    }

    updateObservers() {
        this.eventManager.updateObservers();
    }
}