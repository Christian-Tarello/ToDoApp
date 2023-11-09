export default class ChecklistController {
    constructor(checklist, elementFactory) {
        this.checklist = checklist;
        this.elementFactory = elementFactory;
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    addEmptyItem() {
        const item = this.checklist.addEmptyItem();
        const element = this.elementFactory.buildChecklistItem(item);
        this.view.addItem(element);
    }
}