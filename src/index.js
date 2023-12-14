import './style.css';
import ElementFactory from './modules/factories/elementFactory';
import ModelFactory from './modules/factories/modelFactory';
import ProxyFactory from './modules/factories/proxyFactory';
import StorageWrapper from './modules/utils/storage';
import ChangeListenerProxy from './modules/utils/changeListenerProxy';
import LoadFactory from './modules/factories/loadFactory';

const sidebarHook = document.querySelector(".sidebar");
const contentHook = document.querySelector(".content");

const proxyWrapper = new ChangeListenerProxy();
const storageWrapper = new StorageWrapper(localStorage);
const modelFactory = new ModelFactory();
const modelProxyFactory = new ProxyFactory(modelFactory, (item) => {return proxyWrapper.wrapObject(item)})
const loadFactory = new LoadFactory(modelProxyFactory);
const elementFactory = new ElementFactory(modelProxyFactory);

const data = storageWrapper.getTodo()
let todo;
if (data) {
    todo = loadFactory.loadTodo(data);
} else {
    todo = modelProxyFactory.createTodo(modelProxyFactory.createProject('Inbox'), modelProxyFactory.createProjectCollection());
}

// This sets current and future object proxies to refer to this callback
proxyWrapper.setCallback(() => {storageWrapper.saveTodo(todo)});

document.body.append(elementFactory.buildPopUpLayer());
sidebarHook.append(elementFactory.buildTodo(todo, contentHook));