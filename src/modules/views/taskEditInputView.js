import TaskFields from "../utils/taskFields";
import Priority from "../utils/priority";
import TaskFormTemplate from "../templates/taskFormTemplate";

export default class TaskEditInputView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.template = new TaskFormTemplate();
        this.element = undefined;
    }

    createFormElement() {
        this.formElement = document.createElement('form');
        this.formElement.setAttribute('action', '');
        this.formElement.setAttribute('method', 'POST');
        return this.formElement;
    }

    create() {
        const element = this.createFormElement();
        element.append(
            this.createContentHook(),
            this.createSubmitButton(),
            this.createCancelButton()
        );
        this.controller.updateView();
        return element;
    }

    createContentObj(data) {
        return [
            {
                type: 'textField',
                name: TaskFields.TITLE,
                label: 'Title',
                value: data.title
            },
            {
                type: 'textField',
                name: TaskFields.DESCRIPTION,
                label: 'Description',
                value: data.description
            },
            {
                type: 'selectField',
                name: TaskFields.PRIORITY,
                label: 'Priority',
                options: [
                    {label: 'Low', value: Priority.LOW, isSelected: data.priority === Priority.LOW},
                    {label: 'Medium', value: Priority.MEDIUM,  isSelected: data.priority === Priority.MEDIUM},
                    {label: 'High', value: Priority.HIGH, isSelected: data.priority === Priority.HIGH},
                    {label: 'Unset', value: Priority.UNSET, isSelected: data.priority === Priority.UNSET}
                ]
            },
            {
                type: 'dateField',
                name: TaskFields.DUE_DATE,
                label: 'Due Date',
                value: data.dueDate
            }
        ]
    }

    setContent(data) {
        const contentObj = this.createContentObj(data);
        const items = contentObj.map((data) => this.template.createInput(data));
        this.contentHook.replaceChildren(...items);
    }

    createContentHook() {
        this.contentHook = document.createElement('ul');
        return this.contentHook;
    }

    createSubmitButton() {
        this.submitButton = document.createElement('button');
        this.submitButton.setAttribute('type', 'submit');
        this.submitButton.innerText = 'Edit Task';
        return this.submitButton;
    }

    createCancelButton() {
        this.cancelButton = document.createElement('button');
        this.cancelButton.setAttribute('type', 'button');
        this.cancelButton.innerText = 'Cancel';
        return this.cancelButton;
    }

    setInteractions() {       
        this.formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this.controller.processTaskEditSubmission(e);
        });
        this.cancelButton.addEventListener("click", () => {this.controller.remove()});
    }
    
    build() {
        this.element = this.create();
        this.setInteractions();
        return this.element;
    }

    remove() {
        this.element.remove();
    }
}