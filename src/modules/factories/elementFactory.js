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
import TaskEditInputView from "../views/taskEditInputView";
import TaskEditInputController from "../controllers/taskEditInputController";
import ProjectCollectionView from "../views/projectCollectionView";
import ProjectCollectionController from "../controllers/projectCollectionController";
import CollectionButtonView from "../views/collectionButtonView";
import CollectionButtonController from "../controllers/collectionButtonController";
import TodoView from "../views/todoView";
import TodoController from "../controllers/todoController";
import NoEditProjectView from "../views/noEditProjectView";

export default class ElementFactory {
    constructor(modelFactory, popUpLayer) {
        this.modelFactory = modelFactory;
        this.popUpLayer = popUpLayer;
    }

    buildChecklist(checklist) {
        const view = new ChecklistView(
            new ChecklistController(
                checklist,
                this,
                (...args) => {return this.modelFactory.createChecklistItem(...args);}
            )
        )

        const element = view.build();

        return element;
    }

    buildTask(task) {
        const checklistElement = this.buildChecklist(task.checklist)
        const view = new TaskView(new TaskController(task, this, this.popUpLayer), checklistElement);
        const element = view.build();
        return element;
    }

    buildProject(project) {
        const projectView = new ProjectView(new ProjectController(project, this, this.popUpLayer));
        const element = projectView.build();
        return element;
    }

    buildNoEditProject(project) {
        const projectView = new NoEditProjectView(new ProjectController(project, this));
        const element = projectView.build();
        return element;
    }
    
    buildTaskInput(project) {
        const view = new TaskInputView(new TaskInputController(project, (...args) => {return this.modelFactory.createTask(...args);}));
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

    buildProjectCollection(projectCollection, contentHook) {
        const view = new ProjectCollectionView(new ProjectCollectionController(
            projectCollection,
            contentHook,
            this,
            (...args) => {return this.modelFactory.createProject(...args);}
        ));
        const element = view.build();
        return element;
    }

    buildCollectionButton(project, contentHook) {
        const view = new CollectionButtonView(new CollectionButtonController(
            project,
            contentHook,
            (project) => {return this.buildProject(project)}
        ));
        const element = view.build();
        return element;
    }

    buildTodo(todo, contentHook) {
        const projectCollectionElement = this.buildProjectCollection(todo.projectCollection, contentHook);
        const view = new TodoView(new TodoController(
            todo,
            contentHook,
            this
        ),
        projectCollectionElement
        );
        return view.build();
    }
}