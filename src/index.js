import AddTaskController from './modules/controllers/addTask/addTaskController';
import ProjectController from './modules/controllers/addTask/projectController';
import Project from './modules/models/project';
import AddTaskView from './modules/views/addTaskView';
import ProjectView from './modules/views/projectView';
import './style.css';

const contentHook = document.querySelector(".content");

const project = new Project("Test");
const addTaskController = new AddTaskController(new AddTaskView());
const projectController = new ProjectController(new ProjectView(addTaskController.view, project));

contentHook.append(projectController.view.build());