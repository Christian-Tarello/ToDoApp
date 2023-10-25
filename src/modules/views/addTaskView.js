import PubSub from 'pubsub-js';
import Messages from '../utils/messages';

export default class AddTaskView {
    constructor() {
        this.element = undefined;
    }

    build() {
        this.element = document.createElement("button");
        this.element.setAttribute("type", "button");
        this.element.innerText = 'Add Task +';

        this.setInteractions();
        return this.element;
    }

    setInteractions() {
        this.element.addEventListener("click", () => {PubSub.publish(Messages.BUILD_TASK_INPUT)});
    }

    disable() {
        this.element.style.visibility = 'hidden';
    }

    enable() {
        this.element.style.visibility = "visible";
    }
}