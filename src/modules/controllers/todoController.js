import ProjectTemplate from "../templates/projectTemplate";

export default class TodoController {
    constructor(todo, contentHook, elementFactory) {
        this.todo = todo;
        this.contentHook = contentHook;
        this.elementFactory = elementFactory;

        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    displayInbox() {
        this.contentHook.replaceChildren(this.elementFactory.buildNoEditProject(this.todo.inbox));
    }

    createStaticProjectElement(name, taskList) {
        const structure = ProjectTemplate.create();

        structure.nameInput.setAttribute('readonly', '');
        structure.nameInput.setAttribute('value', name)
        structure.addTaskButton.remove();
        structure.deleteButton.remove();

        structure.tasksHook.replaceChildren(...taskList);

        return structure.element;
    }

    displayDueToday() {
        const dueToday = this.todo.getTasksDueToday();
        if (dueToday.length !== 0) {
            const taskElements = dueToday.map((task) => {return this.elementFactory.buildTask(task)});
            const element = this.createStaticProjectElement('Today', taskElements);
            this.contentHook.replaceChildren(element);
        }
    }

    displayDueThisWeek() {
        const dueThisWeek = this.todo.getTasksDueThisWeek();
        if (dueThisWeek.length !== 0) {
            const taskElements = dueThisWeek.map((task) => {return this.elementFactory.buildTask(task)});
            const element = this.createStaticProjectElement('This Week', taskElements);
            this.contentHook.replaceChildren(element);
        }
    }
}