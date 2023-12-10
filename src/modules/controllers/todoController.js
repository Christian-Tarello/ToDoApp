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

    updateView() {
        this.view.replaceItems(
            [
            this.elementFactory.buildNoEditCollectionButton(this.todo.inbox, this.contentHook),
            this.elementFactory.buildNoEditCollectionButton(this.todo.inbox, this.contentHook),
            this.elementFactory.buildNoEditCollectionButton(this.todo.inbox, this.contentHook)
            ]
        )       
    }
}