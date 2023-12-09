import TaskController from "../controllers/taskController";
import TaskView from "../views/taskView";
import ProjectController from "../controllers/projectController";
import ProjectView from "../views/projectView";
import TaskInputController from "../controllers/taskInputController";
import TaskInputView from "../views/taskInputView";
import ChecklistView from "../views/checklistView";
import ChecklistController from "../controllers/checklistController";
import ChecklistItemView from "../views/checklistItemView";
import ChecklistItemController from "../controllers/checklistItemController";
import PopUpLayerView from "../views/popUpLayerView";
import PopUpLayerController from "../controllers/popUpLayerController";
import TaskEditInputView from "../views/taskEditInputView";
import TaskEditInputController from "../controllers/taskEditInputController";
import ProjectCollectionView from "../views/projectCollectionView";
import ProjectCollectionController from "../controllers/projectCollectionController";
import CollectionButtonView from "../views/collectionButtonView";
import CollectionButtonController from "../controllers/collectionButtonController";
import TodoView from "../views/todoView";
import TodoController from "../controllers/todoController";

export default class ElementFactory {
    buildChecklist(checklist) {
        const view = new ChecklistView(
            new ChecklistController(
                checklist,
                this
            )
        )

        const element = view.build();

        return element;
    }

    buildTask(task) {
        const checklistElement = this.buildChecklist(task.checklist)
        const view = new TaskView(new TaskController(task, this), checklistElement);
        const element = view.build();
        return element;
    }

    buildProject(project) {
        const projectView = new ProjectView(new ProjectController(project, this));
        const element = projectView.build();
        return element;
    }
    
    buildTaskInput(project) {
        const view = new TaskInputView(new TaskInputController(project));
        const element = view.build();
        return element;
    }

    buildTaskEditInput(task) {
        const view = new TaskEditInputView(new TaskEditInputController(task));
        const element = view.build();
        return element;
    }

    buildChecklistItem(item) {
        const view = new ChecklistItemView(new ChecklistItemController(item));
        const element = view.build();
        return element;
    }

    buildPopUpLayer() {
        const view = new PopUpLayerView(new PopUpLayerController());
        const element = view.build();
        return element;
    }

    buildProjectCollection(projectCollection, contentHook) {
        const view = new ProjectCollectionView(new ProjectCollectionController(
            projectCollection,
            contentHook,
            this
        ));
        const element = view.build();
        return element;
    }

    buildCollectionButton(project, contentHook) {
        const view = new CollectionButtonView(new CollectionButtonController(
            project,
            contentHook,
            this
        ));
        const element = view.build();
        return element;
    }

    buildTodo(todo, contentHook) {
        const projectCollectionElement = this.buildProjectCollection(todo.projectCollection, contentHook);
        const view = new TodoView(new TodoController(), projectCollectionElement);
        return view.build();
    }
}