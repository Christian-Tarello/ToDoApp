import PubSub from "pubsub-js";
import Messages from "../utils/messages";
import TaskController from "../controllers/taskController";
import TaskView from "../views/taskView";
import ProjectController from "../controllers/projectController";
import ProjectView from "../views/projectView";
import AddTaskController from "../controllers/addTaskController";
import AddTaskView from "../views/addTaskView";
import TaskInputController from "../controllers/taskInputController";
import TaskInputView from "../views/taskInputView";

export default class ElementFactory {
    constructor(projectCollection) {
        this.projectCollection = projectCollection;
    }

    buildTask(id) {
        const project = this.projectCollection.find((item) => item.getById(id) !== undefined);
        const task = project.getById(id);
        const view = new TaskView(new TaskController(task, this));
        const element = view.build();
        PubSub.publish(Messages.TASK_ELEMENT, element)
        return element;
    }

    buildProject(id) {
        const project = this.projectCollection[id];
        const addTaskView = new AddTaskView(new AddTaskController(this));
        const projectView = new ProjectView(new ProjectController(project, this), addTaskView);
        const element = projectView.build()
        PubSub.publish(Messages.PROJECT_ELEMENT, element);
        return element;
    }
    
    buildTaskInput() {
        const view = new TaskInputView(new TaskInputController());
        const element = view.build();
        PubSub.publish(Messages.TASK_CREATION_INPUT_ELEMENT, element);
        return element;
    }
}