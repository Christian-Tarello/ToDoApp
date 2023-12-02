import ElementFactory from './modules/factories/elementFactory';
import ModelFactory from './modules/factories/modelFactory';
import './style.css';

const sidebarHook = document.querySelector(".sidebar");
const contentHook = document.querySelector(".content");

const elementFactory = new ElementFactory();

const projectCollection = ModelFactory.createProjectCollection();

document.body.append(elementFactory.buildPopUpLayer());
sidebarHook.append(elementFactory.buildProjectCollection(projectCollection, contentHook));
