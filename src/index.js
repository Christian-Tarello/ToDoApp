import ElementFactory from './modules/factories/elementFactory';
import ModelFactory from './modules/factories/modelFactory';
import './style.css';

const sidebarHook = document.querySelector(".sidebar");
const contentHook = document.querySelector(".content");

const elementFactory = new ElementFactory();

const todo = ModelFactory.createTodo(ModelFactory.createProject('Inbox'), ModelFactory.createProjectCollection());

document.body.append(elementFactory.buildPopUpLayer());
sidebarHook.append(elementFactory.buildTodo(todo, contentHook));
