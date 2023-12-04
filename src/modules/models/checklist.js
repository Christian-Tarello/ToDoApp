import CollectionWrapper from "../utils/collectionWrapper";

export default class Checklist {
    constructor(items) {
        this.collection = new CollectionWrapper(items);
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

    setDone() {
        this.items.forEach((item) => item.setDone());
    }

    setUndone() {
        this.items.forEach((item) => item.setUndone());
    }

    toggleDone() {
        this.items.forEach((item) => item.toggleDone());
    }
}