export default class Component {
    constructor() {
        this.element = undefined;
        this.parent = undefined;
        this.strategy = undefined;
        this.components = [];
    }

    build() {
        this.element = this.strategy.build();
        return this.element;
    }

    setStrategy(strategy) {
        this.strategy?.setComponent();
        this.strategy = strategy;
        this.strategy.setComponent(this);
    }

    getStrategy() {
        return this.strategy;
    }

    setParent(component) {
        this.parent.remove(component);
        this.parent = component;
    }

    getParent() {
        return this.parent;
    }

    add(component) {
        this.components.push(component);
        this.setParent(component);
    }

    remove(component) {
        const index = this.components.findIndex((item) => item === component);
        this.components[index].setParent();
        this.components.splice(index, 1);
    }

    getComponents() {
        return this.components;
    }
}