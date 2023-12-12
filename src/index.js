import ElementFactory from './modules/factories/elementFactory';
import ModelFactory from './modules/factories/modelFactory';
import './style.css';

const sidebarHook = document.querySelector(".sidebar");
const contentHook = document.querySelector(".content");

const modelFactory = new ModelFactory();

const elementFactory = new ElementFactory(modelFactory);

const todo = modelFactory.createTodo(modelFactory.createProject('Inbox'), modelFactory.createProjectCollection());

document.body.append(elementFactory.buildPopUpLayer());
sidebarHook.append(elementFactory.buildTodo(todo, contentHook));
