export default class ProjectTemplate {
    static createContainer() {
        const element = document.createElement('div');
        element.classList.add('project');
        return element;
    }

    static createHeaderContainer() {
        const element = document.createElement('div');
        element.classList.add('project-header');
        return element;
    }

    static createNameInput() {
        const element = document.createElement('input');
        element.setAttribute('type', 'text');
        element.classList.add('project-nameInput');
        return element;
    }

    static createDeleteButton() {
        const element = document.createElement('button');
        element.setAttribute('type', 'button');
        element.classList.add('project-deleteButton');
        element.innerText = 'X';
        return element;
    }

    static createTasksHook() {
        const element = document.createElement('div');
        element.classList.add('project-contentHook');
        return element;
    }

    static createAddTaskInputButton() {
        const element = document.createElement("button");
        element.setAttribute("type", "button");
        element.classList.add('project-addButton');
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
            deleteButton,
            nameInput
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