export default class CollectionButtonTemplate {
    static createContainer() {
        const element = document.createElement('div');
        return element;
    }
    
    static createButton() {
        const element = document.createElement('button');
        element.setAttribute('type', 'button');
        return element;
    }
    
    static createDeleteButton() {
        const element = document.createElement('button');
        element.setAttribute('type', 'button');
        element.innerText = 'X';
        return element;
    }
}

