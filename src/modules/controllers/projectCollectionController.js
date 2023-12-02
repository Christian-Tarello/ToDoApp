import ModelFactory from "../factories/modelFactory";

export default class ProjectCollectionController {
    constructor(projectCollection, contentHook, elementFactory) {
        this.projectCollection = projectCollection;
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
                return this.view.createProjectButton(item);
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

    deleteProject(project) {
        const index = this.projectCollection.items.findIndex((item) => item === project);
        this.projectCollection.remove(index);
    }

    createEmptyProject() {
        const project = ModelFactory.createProject('');
        this.projectCollection.add(project);
        this.updateView();
    }
}