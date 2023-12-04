import ModelFactory from "../factories/modelFactory";

export default class ChecklistController {
    constructor(checklist, elementFactory) {
        this.checklist = checklist;
        this.checklist.addObserver(this);
        this.elementFactory = elementFactory;
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }
    
    addEmptyItem() {
        const item = ModelFactory.createChecklistItem('');
        this.checklist.add(item);
    }

    updateView() {
        const elements = this.checklist.items.map(
            (item) => {
                return this.elementFactory.buildChecklistItem(item);
            }
        )
        this.view.replaceItems(elements);
    }

    update() {
        this.updateView();
    }
}