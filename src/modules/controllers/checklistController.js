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
        this.checklist.addEmptyItem();
        const element = this.elementFactory.buildChecklistItem(
            this.checklist.id,
            this.checklist.items.length - 1
        );
        this.view.addItem(element);
    }
}