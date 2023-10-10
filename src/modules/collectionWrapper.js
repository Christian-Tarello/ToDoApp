export default class CollectionWrapper {
    constructor(items = []) {
        this.items = [];

        items.forEach((item) => {
            this.addItem(item);
        });
    }

    add(item) {
        this.items.push(item);
    }

    remove(position) {
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

    isEmpty() {
        return this.items.length === 0;
    }

    items() {
        return this.items;
    }
}