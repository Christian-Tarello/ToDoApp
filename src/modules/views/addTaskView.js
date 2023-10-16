export default class AddTaskView {
    constructor(controller) {
        this.controller = controller;
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
        this.element.addEventListener("click", () => {this.controller.addTaskInput()});
    }

    disable() {
        this.element.style.visibility = 'hidden';
    }

    enable() {
        this.element.style.visibility = "visible";
    }
}