import PubSub from "pubsub-js";
import Messages from "../utils/messages";

export default class TaskView {
    constructor(task) {
        this.task = task;
        this.element = undefined;
    }

    build() {
        this.element = document.createElement('div');
        this.element.innerHTML = `
        <div>
            <ul>
                <li>Title: ${this.task.title}</li>
                <li>Description: ${this.task.description}</li>
                <li>Priority: ${this.task.priority}</li>
                <li>Due Date: ${this.task.dueDate}</li>
                <li>Done:
                    <input type="checkbox" ${this.task.isDone ? "selected": ""}/>
                </li>
                <button type='button'>Edit</button>
                <button type='button'>Delete</button>
            </ul>
        </div>
        `;
        this.setInteractions();
        return this.element;
    }

    remove() {
        this.element.remove();
    }

    setInteractions() {
        const editButton = this.element.querySelector('button');
        const deleteButton = editButton.nextElementSibling;
        const checkbox = this.element.querySelector('input[type="checkbox"]');

        editButton.addEventListener('click', () => {
            PubSub.publish(Messages.ADD_EDIT_TASK_INPUT, this.task.id)
        });
        deleteButton.addEventListener('click', () => {
            PubSub.publish(Messages.REMOVE_TASK, this.task.id)
        });
        checkbox.addEventListener('change', () => {
            PubSub.publish(Messages.TOGGLE_TASK, this.task.id)
        })
    }

}