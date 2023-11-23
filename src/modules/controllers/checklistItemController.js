export default class ChecklistItemController {
    constructor(item) {
        this.item = item;
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    updateView() {
        this.view.setDescription(item.description);
        this.view.setCheckboxState(item.isDone);
    }

    getData() {
        return {
            description: this.item.description,
            isDone: this.item.isDone
        }
    }

    toggle() {
        this.item.toggleDone();
    }

    changeDescription(description) {
        this.item.description = description;
    }
}