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
        this.formElement = this.template.createFormElement();
        return this.formElement;
    }

    createContainer() {
        return this.createFormElement();
    }

    createContentHook() {
        this.contentHook = this.template.createFieldList();
        return this.contentHook;
    }

    createSubmitButton() {
        this.submitButton = this.template.createSubmitButton(
            document.createTextNode('Create Task')
        );
        return this.submitButton;
    }

    createCancelButton() {
        this.cancelButton = this.template.createCancelButton(
            document.createTextNode('Cancel')
        );
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