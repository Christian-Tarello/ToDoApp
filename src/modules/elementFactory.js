import PubSub from "pubsub-js";
import Messages from "./utils/messages";
import TaskController from "./controllers/addTask/taskController";
import TaskView from "./views/taskView";
import ProjectController from "./controllers/addTask/projectController";
import ProjectView from "./views/projectView";
import AddTaskController from "./controllers/addTask/addTaskController";
import AddTaskView from "./views/addTaskView";
import TaskInputController from "./controllers/addTask/taskInputController";
import TaskInputView from "./views/taskInputView";

export default class ElementFactory {
    constructor(projectCollection) {
        this.projectCollection = projectCollection;
        this.setInteractions();
    }

    buildTask(id) {
        const project = this.projectCollection.find((item) => item.getById(id) !== undefined);
        if (project) {
            const task = project.getById(id);
            const controller = new TaskController(new TaskView(task));
            PubSub.publish(Messages.BUILT_TASK, controller.view.build());
        }
    }

    buildProject(id = 0) {
        const project = this.projectCollection[id];
        const addTaskController = new AddTaskController(new AddTaskView());
        const projectController = new ProjectController(new ProjectView(addTaskController.view, project));
        PubSub.publish(Messages.BUILT_PROJECT, projectController.view.build());
    }
    
    buildTaskInput(){
        const controller = new TaskInputController(new TaskInputView());
        PubSub.publish(Messages.BUILT_TASK_INPUT, controller.view.build());
    }

    setInteractions() {
        PubSub.subscribe(Messages.BUILD_TASK, (msg, id) => {this.buildTask(id)});
        PubSub.subscribe(Messages.BUILD_PROJECT, (msg, id) => {this.buildProject(id)});
        PubSub.subscribe(Messages.BUILD_TASK_INPUT, () => {this.buildTaskInput()});
    }
}