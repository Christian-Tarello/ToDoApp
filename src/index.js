import PopUpLayerController from './modules/controllers/popUpLayerController';
import PopUpLayerView from './modules/views/popUpLayerView';
import ElementFactory from './modules/factories/elementFactory';
import ModelFactory from './modules/factories/modelFactory';
import './style.css';

const contentHook = document.querySelector(".content");

const elementFactory = new ElementFactory();

const testProject = ModelFactory.createProject('test');
const projectElement = elementFactory.buildProject(testProject);

const popUpLayerController = new PopUpLayerController(new PopUpLayerView());

contentHook.append(projectElement);
contentHook.append(popUpLayerController.view.build());