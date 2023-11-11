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
        element.innerHTML = `
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
            <button type="submit">Edit Task</button>
            <button type="button">Cancel</button>             
        `;
        return element;
    }

    setInteractions() {
        const cancelButton = this.element.querySelector('button[type="button"]');
        
        this.element.addEventListener("submit", (e) => {
            e.preventDefault();
            this.controller.processTaskEditSubmission(e);
        });
        cancelButton.addEventListener("click", () => {this.controller.remove()});
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