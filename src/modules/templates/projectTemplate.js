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
        element.setAttribute('placeholder', 'Project Name');
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

    static createBodyContainer() {
        const element = document.createElement('div');
        element.classList.add('project-body');
        return element;
    }

    static createBodyWrapper() {
        const element = document.createElement('scroll-container');
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
        const bodyContainer = ProjectTemplate.createBodyContainer();
        const bodyWrapper = ProjectTemplate.createBodyWrapper();
        const tasksHook = ProjectTemplate.createTasksHook();
        const addTaskButton = ProjectTemplate.createAddTaskInputButton();

        headerContainer.append(
            nameInput,
            deleteButton
        );

        bodyWrapper.append(
            tasksHook,
            addTaskButton
        );

        bodyContainer.append(
            bodyWrapper
        );

        element.append(
            headerContainer,
            bodyContainer
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