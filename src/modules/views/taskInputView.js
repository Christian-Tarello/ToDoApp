export default class TaskInputView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    build() {
        this.element = document.createElement("form");
        this.element.setAttribute('action', '');
        this.element.setAttribute('method', 'POST');
        this.element.innerHTML = `
            <ul>
                <li>
                    <label for="taskTitle">Title</label>
                    <input type="text" id="taskTitle" name="taskTitle" required>
                </li>
                <li>
                    <label for="taskDescription">Description</label>
                    <input type="text" id="taskDescription" name="taskDescription" required>
                </li>
            </ul>
            <button type="submit">Create Task</button>
            <button type="button">Cancel</button>             
        `;

        this.setInteractions();
        return this.element;
    }

    setInteractions() {
        const submitButton = this.element.querySelector('button[type="submit"]');
        const cancelButton = this.element.querySelector('button[type="button"]');

        submitButton.addEventListener("click", (e) => {this.controller.addTask(e)});
        cancelButton.addEventListener("click", (e) => {this.controller.removeTaskInput(e)});
    }

    remove() {
        this.element.remove();
    }
}