export default class CollectionButtonTemplate {
    static createContainer() {
        const element = document.createElement('div');
        element.classList.add('collectionButton');
        return element;
    }
    
    static createButton() {
        const element = document.createElement('button');
        element.setAttribute('type', 'button');
        element.classList.add('collectionButton-button');
        return element;
    }
    
    static createDeleteButton() {
        const element = document.createElement('button');
        element.setAttribute('type', 'button');
        element.classList.add('collectionButton-deleteButton');
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

