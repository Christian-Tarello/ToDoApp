import CollectionWrapper from "../utils/collectionWrapper";
import EventManager from "../utils/eventManager";

export default class Checklist {
    constructor(items) {
        this.collection = new CollectionWrapper(items);
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

    setDone() {
        this.items.forEach((item) => item.setDone());
    }

    setUndone() {
        this.items.forEach((item) => item.setUndone());
    }

    toggleDone() {
        this.items.forEach((item) => item.toggleDone());
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