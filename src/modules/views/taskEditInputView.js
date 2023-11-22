import TaskFields from "../utils/taskFields";
import Priority from "../utils/priority";

export default class TaskEditInputView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    createMainNode() {
        const element = document.createElement('form');
        element.setAttribute('action', '');
        element.setAttribute('method', 'POST');
        return element;
    }

    createTemplate() {
        const element = this.createMainNode();
        element.append(
            this.createContentHook(),
            this.createSubmitButton(),
            this.createCancelButton()
        );
        this.controller.update();
        return element;
    }

    setContent(data) {
        this.contentHook.innerHTML = `
        <ul>
            <li>
                <label for="taskTitle">Title</label>
                <input type="text" id="taskTitle" name="${TaskFields.TITLE}" required>
            </li>
            <li>
                <label for="taskDescription">Description</label>
                <input type="text" id="taskDescription" name="${TaskFields.DESCRIPTION}" required>
            </li>
            <li>
                <label for="taskPriority">Priority</label>
                <select id="taskPriority" name="${TaskFields.PRIORITY}">
                    <option value="${Priority.LOW}">Low</option>
                    <option value="${Priority.MEDIUM}">Medium</option>
                    <option value="${Priority.HIGH}">High</option>
                    <option value="${Priority.UNSET}" selected>Unset</option>
                </select>
            </li>
            <li>
                <label for="taskDueDate">Due</label>
                <input type="date" id="taskDueDate" name="${TaskFields.DUE_DATE}">
            </li>
        </ul>
        `;
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
        this.element.addEventListener("submit", (e) => {
            e.preventDefault();
            this.controller.processTaskEditSubmission(e);
        });
        this.cancelButton.addEventListener("click", () => {this.controller.remove()});
    }
    
    build() {
        this.element = this.createTemplate();
        this.setInteractions();
        return this.element;
    }

    remove() {
        this.element.remove();
    }
}