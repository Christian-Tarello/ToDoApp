import Priority from "../utils/priority";

export default class TaskView {
    constructor(controller, checklistElement) {
        this.controller = controller;
        this.controller.setView(this);
        this.checklistElement = checklistElement;
    }

    createContainer() {
        const element = document.createElement('div');
        element.classList.add('task');
        return element;
    }

    createHeaderContainer() {
        const element = document.createElement('div');
        element.classList.add('task-header');
        return element;
    }

    createDisplayCheckbox() {
        this.displayCheckbox = document.createElement('input');
        this.displayCheckbox.setAttribute('type', 'checkbox');
        this.displayCheckbox.classList.add('task-displayToggle');
        return this.displayCheckbox;
    }

    createDoneToggle() {
        this.doneToggle = document.createElement('input');
        this.doneToggle.setAttribute('type', 'checkbox');
        this.doneToggle.classList.add('task-doneToggle');
        return this.doneToggle;
    }

    createTitleInput() {
        this.titleInput = document.createElement('input');
        this.titleInput.setAttribute('type', 'text');
        this.titleInput.classList.add('task-titleInput');
        return this.titleInput;
    }

    createDateInput() {
        this.dateInput = document.createElement('input');
        this.dateInput.setAttribute('type', 'date');
        this.dateInput.classList.add('task-dateInput');
        return this.dateInput;
    }

    createPriority(value) {
        const element = document.createElement('input');
        element.setAttribute('type', 'checkbox');
        element.setAttribute('value', value);
        element.classList.add('prioritySelector-priority');
        return element;
    }

    createPrioritiesContainer() {
        const element = document.createElement('span');
        element.classList.add('prioritySelector');
        return element;
    }

    createPriorityElements() {
        this.priorityElements = Object.values(Priority).toReversed().map((value) => this.createPriority(value));
        return this.priorityElements;
    }

    createDeleteButton() {
        this.deleteButton = document.createElement('button');
        this.deleteButton.setAttribute('type', 'button');
        this.deleteButton.classList.add('task-deleteButton');
        this.deleteButton.innerText = "X";
        return this.deleteButton;
    }

    createBodyContainer() {
        this.bodyContainer = document.createElement('div');
        this.bodyContainer.classList.add('task-body');
        this.setBodyVisibility(false);
        return this.bodyContainer;
    }

    createDescriptionInput() {
        this.descriptionInput = document.createElement('textarea');
        this.descriptionInput.classList.add('task-descriptionInput');
        this.descriptionInput.setAttribute('placeholder', 'Type here...')
        return this.descriptionInput;
    }

    create() {
        const element = this.createContainer();
        const header = this.createHeaderContainer();
        const body = this.createBodyContainer();

        const prioritiesContainer = this.createPrioritiesContainer();
        prioritiesContainer.append(...this.createPriorityElements())
        
        header.append(
            this.createDisplayCheckbox(),
            this.createDoneToggle(),
            this.createTitleInput(),
            this.createDateInput(),
            prioritiesContainer,
            this.createDeleteButton()
        );

        body.append(
            this.createDescriptionInput(),
            this.checklistElement
        );

        element.append(header, body);

        return element;
    }

    setInteractions() {
        this.deleteButton.addEventListener('click', () => {this.controller.delete()});
        this.doneToggle.addEventListener('change', () => {this.controller.toggle()});
        this.titleInput.addEventListener('change', (e) => {this.controller.changeTitle(e.target.value)});
        this.descriptionInput.addEventListener('change', (e) => {this.controller.changeDescription(e.target.value)});
        this.dateInput.addEventListener('change', (e) => {this.controller.changeDueDate(e.target.value)});
        this.priorityElements.forEach((element) => {
            element.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.setPriority(e.target.value);
                    this.controller.changePriority(e.target.value);
                }
            });
        });
        this.displayCheckbox.addEventListener('change', (e) => {this.setBodyVisibility(e.target.checked)})
    }

    build() {
        this.element = this.create();
        this.controller.updateView();
        this.setInteractions();
        return this.element;
    }

    setTitle(title) {
        this.titleInput.setAttribute('value', title)
    }

    setDescription(description) {
        this.descriptionInput.value = description;
    }

    setPriority(priority) {
        this.priorityElements.forEach((item) => {
            if (item.value === priority) {
                item.checked = true;
                item.disabled = true;
            } else {
                item.checked = false;
                item.disabled = false;
            }
        });
    }

    setDueDate(date) {
        this.dateInput.value = date;
    }

    setDone(isDone) {
        this.doneToggle.checked = isDone;
    }

    setBodyVisibility(isVisible) {
        if (isVisible) {
            this.bodyContainer.classList.remove('task-body--hidden');
        }
        else {
            this.bodyContainer.classList.add('task-body--hidden');
        }
    }
}