export default class ProjectView {
    constructor() {
        this.element = undefined;
    }

    build() {
        this.element = document.createElement("div");
        return this.element;
    }

    addItem(element) {
        this.element.append(element);
    }
}