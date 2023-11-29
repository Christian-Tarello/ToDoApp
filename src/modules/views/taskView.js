export default class TaskView {
    constructor(controller, checklistElement) {
        this.controller = controller;
        this.controller.setView(this);
        this.checklistElement = checklistElement;
        this.element = undefined;
    }

    createContainer() {
        const element = document.createElement('div');
        return element;
    }

    createContentHook() {
        this.contentHook = document.createElement('ul');
        return this.contentHook;
    }

    createButtonRow() {
        const buttonRow = document.createElement('div');
        buttonRow.append(
            this.createEditButton(),
            this.createDeleteButton()
        );
        return buttonRow;
    }

    createDeleteButton() {
        this.deleteButton = document.createElement('button');
        this.deleteButton.innerText = 'Delete';
        return this.deleteButton;
    }

    createEditButton() {
        this.editButton = document.createElement('button');
        this.editButton.innerText = 'Edit';
        return this.editButton;
    }

    createDoneToggle() {
        this.doneToggle = document.createElement('input');
        this.doneToggle.setAttribute('type', 'checkbox');
        return this.doneToggle;
    }
    
    create() {
        const element = this.createContainer();
        element.append(this.createDoneToggle());
        element.append(this.createContentHook());
        element.append(this.createButtonRow());
        element.append(this.checklistElement);
        return element;
    }

    setInteractions() {
        this.editButton.addEventListener('click', () => {this.controller.addEditTaskInput()});
        this.deleteButton.addEventListener('click', () => {this.controller.delete()});
        this.doneToggle.addEventListener('change', () => {this.controller.toggle()});
    }

    build() {
        this.element = this.create();
        this.controller.updateView();
        this.setInteractions();
        return this.element;
    }

    remove() {
        this.element.remove();
    }

    setContent(data) {
        this.contentHook.innerHTML = `
            <li>Title: ${data.title}</li>
            <li>Description: ${data.description}</li>
            <li>Priority: ${data.priority}</li>
            <li>Due Date: ${data.dueDate}</li>
        `;
        this.setCheckboxState(data.isDone);
    }

    setCheckboxState(isOn) {
        if (isOn) {
            this.doneToggle.setAttribute('checked', '');
        } else {
            this.doneToggle.removeAttribute('checked', '');
        }
    }
}