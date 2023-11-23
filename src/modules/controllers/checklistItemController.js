export default class ChecklistItemController {
    constructor(item) {
        this.item = item;
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    toggle() {
        this.item.toggleDone();
    }

    changeDescription(description) {
        this.item.description = description;
    }

    updateView() {
        this.view.setDescription(this.item.description);
        this.view.setCheckboxState(this.item.isDone);
    }
}