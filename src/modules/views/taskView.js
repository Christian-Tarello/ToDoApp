export default class TaskView {
    constructor(controller, checklistElement) {
        this.controller = controller;
        this.controller.setView(this);
        this.checklistElement = checklistElement;
        this.element = undefined;
        this.interactiveElements = {};
    }

    build() {
        this.element = document.createElement('div');
        this.element.append(this.createDoneToggle());
        this.element.append(this.createContentHook());
        this.element.append(this.createButtonRow());
        this.element.append(this.checklistElement);
        this.updateState();
        this.setInteractions();
        return this.element;
    }

    createContentHook() {
        this.contentHook = document.createElement('ul');
        return this.contentHook;
    }

    setContent(data) {
        this.contentHook.innerHTML = `
            <li>Title: ${data.title}</li>
            <li>Description: ${data.description}</li>
            <li>Priority: ${data.priority}</li>
            <li>Due Date: ${data.dueDate}</li>
        `;
    }

    updateState() {
        const data = this.controller.getData();
        this.setContent(data);
        if (data.isDone) {
            this.doneToggle.setAttribute('checked', '');
        } else {
            this.doneToggle.removeAttribute('checked', '');
        }
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
    
    remove() {
        this.element.remove();
    }

    setInteractions() {
        this.editButton.addEventListener('click', () => {this.controller.addEditTaskInput()});
        this.deleteButton.addEventListener('click', () => {this.controller.delete()});
        this.doneToggle.addEventListener('change', () => {this.controller.toggle()});
    }

}