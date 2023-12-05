export default class CollectionButtonController {
    constructor(project, contentHook, elementFactory) {
        this.project = project;
        this.project.addObserver(this);
        this.contentHook = contentHook;
        this.elementFactory = elementFactory;

        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    updateView() {
        this.view.changeName(this.project.name);
    }

    update() {
        this.updateView();
    }

    display() {
        this.contentHook.replaceChildren(this.elementFactory.buildProject(this.project));
    }
}