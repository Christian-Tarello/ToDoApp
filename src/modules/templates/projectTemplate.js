export default class ProjectTemplate {
    static createContainer() {
        const element = document.createElement('div');
        return element;
    }

    static createHeaderContainer() {
        const element = document.createElement('div');
        return element;
    }

    static createNameInput() {
        const element = document.createElement('input');
        element.setAttribute('type', 'text');
        return element;
    }

    static createDeleteButton() {
        const element = document.createElement('button');
        element.setAttribute('type', 'button');
        element.innerText = 'X';
        return element;
    }

    static createTasksHook() {
        const element = document.createElement('div');
        return element;
    }

    static createAddTaskInputButton() {
        const element = document.createElement("button");
        element.setAttribute("type", "button");
        element.innerText = 'Add Task +';
        return element;
    }
}