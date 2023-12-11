export default class CollectionWrapper {
    constructor(items = []) {
        this.items = items;
    }

    add(item) {
        this.items.push(item);
    }

    remove(item) {
        const position = this.items.findIndex((value) => value === item);
        this.items.splice(position, 1);
    }

    insert(item, position) {
        this.items.splice(position, 0, item);
    }

    replace(item, position) {
        this.items.splice(position, 1, item);
    }

    get(position) {
        return this.items[position]; 
    }

    clean() {
        this.items = [];
    }
}