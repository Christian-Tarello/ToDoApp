import PubSub from "pubsub-js";
import Topics from "../utils/topics";
import TaskController from "../controllers/taskController";
import TaskView from "../views/taskView";
import ProjectController from "../controllers/projectController";
import ProjectView from "../views/projectView";
import AddTaskController from "../controllers/addTaskController";
import AddTaskView from "../views/addTaskView";
import TaskInputController from "../controllers/taskInputController";
import TaskInputView from "../views/taskInputView";
import ChecklistView from "../views/checklistView";
import ChecklistController from "../controllers/checklistController";
import ChecklistItemView from "../views/checklistItemView";
import ChecklistItemController from "../controllers/checklistItemController";

export default class ElementFactory {
    constructor(projectCollection) {
        this.projectCollection = projectCollection;
    }

    buildTask(id) {
        const project = this.projectCollection.find((item) => item.getById(id) !== undefined);
        const task = project.getById(id);
        const checklist = task.checklist;
        const checklistView = new ChecklistView(
            new ChecklistController(
                checklist,
                this
            )
        )
        const view = new TaskView(new TaskController(task), checklistView);
        const element = view.build();
        PubSub.publish(Topics.TASK_ELEMENT, element)
        return element;
    }

    buildProject(id) {
        const project = this.projectCollection[id];
        const addTaskView = new AddTaskView(new AddTaskController(this));
        const projectView = new ProjectView(new ProjectController(project, this), addTaskView);
        const element = projectView.build()
        PubSub.publish(Topics.PROJECT_ELEMENT, element);
        return element;
    }
    
    buildTaskInput() {
        const view = new TaskInputView(new TaskInputController());
        const element = view.build();
        PubSub.publish(Topics.TASK_CREATION_INPUT_ELEMENT, element);
        return element;
    }

    buildChecklistItem(id, position) {
        const project = this.projectCollection.find((item) => item.getById(id) !== undefined);
        const task = project.getById(id);
        const checklist = task.checklist;
        const item = checklist.items[position];
        const view = new ChecklistItemView(new ChecklistItemController(item));
        const element = view.build();
        PubSub.publish(Topics.CHECKLIST_ITEM_ELEMENT, element);
        return element;
    }
}