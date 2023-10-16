import CollectionWrapper from "../utils/collectionWrapper";

export default class Checklist extends CollectionWrapper {
    setDone() {
        this.items.forEach((item) => item.setDone());
    }

    setUndone() {
        this.items.forEach((item) => item.setUndone());
    }

    toggleDone(){
        this.items.forEach((item) => item.toggleDone());
    }
}