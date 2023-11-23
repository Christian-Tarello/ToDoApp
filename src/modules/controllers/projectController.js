import PubSub from "pubsub-js";
import Topics from "../utils/topics";

export default class ProjectController {
    constructor(project, elementFactory) {
        this.elementFactory = elementFactory;
        this.project = project;
        this.project.addObserver(this);
        this.view = undefined;
    }

    setView(view) {
        this.view = view;
    }

    addTaskInput() {
        const element = this.elementFactory.buildTaskInput(this.project);
        PubSub.publish(Topics.ADD_POP_UP, element);
    }

    updateView() {
        PubSub.publishSync(Topics.FINALIZE_ALL_TASKS);
        const elements = this.project.items.map(
            (item) => {
                return this.elementFactory.buildTask(item);
            }
        )
        this.view.replaceItems(elements);
    }

    update() {
        this.updateView();
    }
}