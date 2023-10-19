export default class ProjectView {
    constructor(addTaskView, project) {
        this.addTaskView = addTaskView;
        this.project = project;
        this.element = undefined;
    }

    build() {
        this.element = document.createElement('div');
        this.element.append(document.createElement('div'));
        this.element.append(this.addTaskView.build());
        return this.element;
    }

    addItem(element) {
        this.element.firstChild.append(element);
    }
}