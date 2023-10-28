export default class TaskView {
    constructor(controller) {
        this.controller = controller;
        this.controller.setView(this);
        this.element = undefined;
    }

    build() {
        this.element = document.createElement('div');
        const data = this.controller.getData();
        this.setContent(data);
        this.setInteractions();
        return this.element;
    }

    setContent(data) {
        this.element.innerHTML = `
            <ul>
                <li>Title: ${data.title}</li>
                <li>Description: ${data.description}</li>
                <li>Priority: ${data.priority}</li>
                <li>Due Date: ${data.dueDate}</li>
                <li>Done:
                    <input type="checkbox" ${data.isDone ? "selected": ""}/>
                </li>
                <button type='button'>Edit</button>
                <button type='button'>Delete</button>
            </ul>
        `;
    }
    
    remove() {
        this.element.remove();
    }

    setInteractions() {
        const editButton = this.element.querySelector('button');
        const deleteButton = editButton.nextElementSibling;
        const checkbox = this.element.querySelector('input[type="checkbox"]');

        editButton.addEventListener('click', () => {this.controller.addEditTaskInput()});
        deleteButton.addEventListener('click', () => {this.controller.remove()});
        checkbox.addEventListener('change', () => {this.controller.toggle()});
    }

}