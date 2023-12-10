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

    static create() {
        const element = ProjectTemplate.createContainer();
        const headerContainer = ProjectTemplate.createHeaderContainer();
        const nameInput = ProjectTemplate.createNameInput();
        const deleteButton = ProjectTemplate.createDeleteButton();
        const tasksHook = ProjectTemplate.createTasksHook();
        const addTaskButton = ProjectTemplate.createAddTaskInputButton();

        headerContainer.append(
            nameInput,
            deleteButton
        );

        element.append(
            headerContainer,
            tasksHook,
            addTaskButton
        );

        return {
            element,
            nameInput,
            deleteButton,
            tasksHook,
            addTaskButton
        }
    }
}