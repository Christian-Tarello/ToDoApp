export default class ProjectCollectionController {
    constructor(projectCollection, contentHook, elementFactory, projectFactory) {
        this.projectCollection = projectCollection;
        this.projectCollection.addObserver(this);
        this.contentHook = contentHook;
        this.elementFactory = elementFactory;
        this.projectFactory = projectFactory;

        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    updateView() {
        const elements = this.projectCollection.items.map(
            (item) => {
                return this.elementFactory.buildCollectionButton(item, this.contentHook);
            }
        )
        this.view.replaceItems(elements);
    }

    update() {
        this.updateView();
    }

    createEmptyProject() {
        const project = this.projectFactory('');
        this.projectCollection.add(project);
    }
}