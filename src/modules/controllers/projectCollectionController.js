import ModelFactory from "../factories/modelFactory";

export default class ProjectCollectionController {
    constructor(projectCollection, contentHook, elementFactory) {
        this.projectCollection = projectCollection;
        this.projectCollection.addObserver(this);
        this.contentHook = contentHook;
        this.elementFactory = elementFactory;

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

    displayProject(project) {
        this.contentHook.replaceChildren(this.elementFactory.buildProject(project));
    }

    createEmptyProject() {
        const project = ModelFactory.createProject('');
        this.projectCollection.add(project);
    }
}