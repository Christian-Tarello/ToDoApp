import AddTaskController from './modules/controllers/addTask/addTaskController';
import ProjectController from './modules/controllers/addTask/projectController';
import AddTaskView from './modules/views/addTaskView';
import ProjectView from './modules/views/projectView';
import './style.css';

const contentHook = document.querySelector(".content");

const projectController = new ProjectController(new ProjectView());
const addTaskController = new AddTaskController(new AddTaskView());

contentHook.append(projectController.view.build());
projectController.view.addItem(addTaskController.view.build());