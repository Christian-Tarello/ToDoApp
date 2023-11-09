import CollectionWrapper from "../utils/collectionWrapper";
import ChecklistItem from "./checklistItem";

export default class Checklist extends CollectionWrapper {
    constructor(id, items) {
        super(items)
        this.id = id;
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

    addEmptyItem() {
        const item = new ChecklistItem(''); 
        this.add(item);
        return item;
    } 
}