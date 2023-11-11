import ModelFactory from "../factories/modelFactory";

export default class ChecklistController {
    constructor(checklist, elementFactory) {
        this.checklist = checklist;
        this.elementFactory = elementFactory;
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    load() {
        const elements = this.checklist.items.map(
            (item) => {
                return this.elementFactory.buildChecklistItem(item);
            }
        )
        this.view.replaceItems(elements);
    }

    update() {
        this.load();
    }

    addEmptyItem() {
        const item = ModelFactory.createChecklistItem('');
        this.checklist.add(item);
        const element = this.elementFactory.buildChecklistItem(item);
        this.view.addItem(element);
    }
}