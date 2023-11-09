import ElementFactory from './modules/factories/elementFactory';
import ModelFactory from './modules/factories/modelFactory';
import './style.css';

const contentHook = document.querySelector(".content");

const elementFactory = new ElementFactory();

const testProject = ModelFactory.createProject('test');

const projectElement = elementFactory.buildProject(testProject);
const popUpLayerElement = elementFactory.buildPopUpLayer();

contentHook.append(
    projectElement,
    popUpLayerElement
);