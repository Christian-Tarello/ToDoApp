import PopUpLayerController from './modules/controllers/popUpLayerController';
import PopUpLayerView from './modules/views/popUpLayerView';
import ElementFactory from './modules/elementFactory';
import ModelFactory from './modules/modelFactory';
import './style.css';

const contentHook = document.querySelector(".content");


const modelFactory = new ModelFactory();
const elementFactory = new ElementFactory([modelFactory.createProject({name: 'test'})]);
const popUpLayerController = new PopUpLayerController(new PopUpLayerView());

contentHook.append(elementFactory.buildProject(0));
contentHook.append(popUpLayerController.view.build());