export default class ProjectController {
    constructor(project, elementFactory, popUpLayer) {
        this.elementFactory = elementFactory;
        this.popUpLayer = popUpLayer;
        this.project = project;
        this.project.addObserver(this);
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    addTaskInput() {
        const element = this.elementFactory.buildTaskInput(this.project);
        this.popUpLayer.addPopUp(element, true, true);
    }

    updateView() {
        const elements = this.project.items.map(
            (item) => {
                return this.elementFactory.buildTask(item);
            }
        )
        this.view.replaceItems(elements);
        this.view.setName(this.project.name);
    }

    update() {
        this.updateView();
    }

    finalize() {
        this.project.removeObserver(this);
    }

    remove() {
        this.view.remove();
    }

    delete() {
        this.finalize();
        this.remove();
        this.project.unlink();
    }

    changeName(name) {
        this.project.setState({name});
    }
}