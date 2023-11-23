import TaskFields from "../utils/taskFields";
import Priority from "../utils/priority";
import TaskFormTemplate from "../templates/taskFormTemplate";

export default class TaskInputView {
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

    createContainer() {
        return this.createFormElement();
    }

    createContentHook() {
        this.contentHook = document.createElement('ul');
        return this.contentHook;
    }

    createSubmitButton() {
        this.submitButton = document.createElement('button');
        this.submitButton.setAttribute('type', 'submit');
        this.submitButton.innerText = 'Create Task';
        return this.submitButton;
    }

    createCancelButton() {
        this.cancelButton = document.createElement('button');
        this.cancelButton.setAttribute('type', 'button');
        this.cancelButton.innerText = 'Cancel';
        return this.cancelButton;
    }

    create() {
        const element = this.createContainer();
        element.append(
            this.createContentHook(),
            this.createSubmitButton(),
            this.createCancelButton()
        );
        return element;
    }

    setInteractions() {        
        this.formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this.controller.processTaskSubmission(e);
        });
        this.cancelButton.addEventListener("click", () => {this.controller.remove()});
    }

    build() {
        this.element = this.create();
        this.setContent();
        this.setInteractions();
        return this.element;
    }

    createContentObj() {
        return [
            {
                type: 'textField',
                name: TaskFields.TITLE,
                label: 'Title',
                value: ''
            },
            {
                type: 'textField',
                name: TaskFields.DESCRIPTION,
                label: 'Description',
                value: ''
            },
            {
                type: 'selectField',
                name: TaskFields.PRIORITY,
                label: 'Priority',
                options: [
                    {label: 'Low', value: Priority.LOW, isSelected: false},
                    {label: 'Medium', value: Priority.MEDIUM,  isSelected: false},
                    {label: 'High', value: Priority.HIGH, isSelected: false},
                    {label: 'Unset', value: Priority.UNSET, isSelected: true}
                ]
            },
            {
                type: 'dateField',
                name: TaskFields.DUE_DATE,
                label: 'Due Date',
                value: ''
            }
        ]
    }

    setContent() {
        const contentObj = this.createContentObj();
        const items = contentObj.map((data) => this.template.createInput(data));
        this.contentHook.replaceChildren(...items);
    }
    
    remove() {
        this.element.remove();
    }
}