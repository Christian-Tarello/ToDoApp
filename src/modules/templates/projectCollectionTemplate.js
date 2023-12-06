export default class ProjectCollectionTemplate {
    static createContainer() {
        const element = document.createElement('div');
        return element;
    }

    static createAddButton() {
        const element = document.createElement('button');
        element.setAttribute('type', 'button');
        element.innerText = '+ Add Project';
        return element;
    }

    static createContentHook() {
        const element = document.createElement('div');
        return element;
    }
}