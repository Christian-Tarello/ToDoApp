import PopUpLayerController from './modules/controllers/addTask/popUpLayerController';
import Project from './modules/models/project';
import PopUpLayerView from './modules/views/popUpLayerView';
import ElementFactory from './modules/elementFactory';
import ModelFactory from './modules/modelFactory';
import PubSub from 'pubsub-js';
import Messages from './modules/utils/messages';
import './style.css';

const contentHook = document.querySelector(".content");


const elementFactory = new ElementFactory([new Project("test")]);
const modelFactory = new ModelFactory();

const popUpLayerController = new PopUpLayerController(new PopUpLayerView());

PubSub.subscribe(Messages.BUILT_PROJECT, (msg, element) => {contentHook.append(element)});
PubSub.publish(Messages.BUILD_PROJECT, 0);

/* 
const addTaskController = new AddTaskController(new AddTaskView());
const projectController = new ProjectController(new ProjectView(addTaskController.view, project));

contentHook.append(projectController.view.build());
*/

contentHook.append(popUpLayerController.view.build());