import ProjectController from './modules/controllers/addTask/projectController';
import AddTaskView from './modules/views/addTaskView';
import ProjectView from './modules/views/projectView';
import './style.css';

const contentHook = document.querySelector(".content");

const projectController = new ProjectController();
const projectView = new ProjectView(projectController);
const addTaskView = new AddTaskView(projectController);
projectView.setAddTaskView(addTaskView);

contentHook.append(projectView.build());