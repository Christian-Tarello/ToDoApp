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

    static create() {
        const element = CollectionButtonTemplate.createContainer();
        const button = CollectionButtonTemplate.createButton()
        const deleteButton = CollectionButtonTemplate.createDeleteButton();
        element.append(
            button,
            deleteButton
        );
        return {
            element,
            button,
            deleteButton
        };
    }
}

