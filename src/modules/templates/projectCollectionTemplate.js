export default class ProjectCollectionTemplate {
    static createContainer() {
        const element = document.createElement('div');
        element.classList.add('projectCollection');
        return element;
    }

    static createAddButton() {
        const element = document.createElement('button');
        element.setAttribute('type', 'button');
        element.classList.add('projectCollection-addButton');
        element.innerText = '+ Add Project';
        return element;
    }

    static createContentHook() {
        const element = document.createElement('div');
        element.classList.add('projectCollection-contentHook');
        return element;
    }

    static create() {
        const element = ProjectCollectionTemplate.createContainer();
        const addButton = ProjectCollectionTemplate.createAddButton();
        const contentHook = ProjectCollectionTemplate.createContentHook();
        
        element.append(
            addButton,
            contentHook
        );

        return {
            element,
            addButton,
            contentHook
        };
    }
}