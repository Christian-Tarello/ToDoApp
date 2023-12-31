export default class CollectionButtonController {
    constructor(project, contentHook, buildProject) {
        this.project = project;
        this.project.addObserver(this);
        this.contentHook = contentHook;
        this.buildProject = buildProject;

        this.displayedElement = undefined;

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

    finalize() {
        this.project.removeObserver(this);
    }

    remove() {
        this.view.remove();
        if (this.displayedElement) {
            const element = this.displayedElement.deref();
            if (element) {
                element.remove();
            }
        }
    }

    delete() {
        this.project.unlink();
        this.finalize();
        this.remove();
    }

    display() {
        this.displayedElement = new WeakRef(this.buildProject(this.project));
        this.contentHook.replaceChildren(this.displayedElement.deref());
    }
}