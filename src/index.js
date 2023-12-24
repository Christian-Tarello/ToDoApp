import './style.css';
import ElementFactory from './modules/factories/elementFactory';
import ModelFactory from './modules/factories/modelFactory';
import ProxyFactory from './modules/factories/proxyFactory';
import StorageWrapper from './modules/utils/storage';
import ChangeListenerProxy from './modules/utils/changeListenerProxy';
import LoadFactory from './modules/factories/loadFactory';
import PopupLayer from './modules/popUp/popUpLayer';

const sidebarHook = document.querySelector(".sidebar");
const contentHook = document.querySelector(".content");

const proxyWrapper = new ChangeListenerProxy();
const storageWrapper = new StorageWrapper(localStorage);
const modelFactory = new ModelFactory();
const modelProxyFactory = new ProxyFactory(modelFactory, (item) => {return proxyWrapper.wrapObject(item)})
const loadFactory = new LoadFactory(modelProxyFactory);

const popUpElement = document.createElement('div');
const popUpLayer = new PopupLayer(popUpElement);

const elementFactory = new ElementFactory(modelProxyFactory, popUpLayer);

const data = storageWrapper.getTodo()
let todo;
if (data) {
    todo = loadFactory.loadTodo(data);
} else {
    todo = modelProxyFactory.createTodo(modelProxyFactory.createProject('Inbox'), modelProxyFactory.createProjectCollection());
}

// This sets current and future object proxies to refer to this callback
proxyWrapper.setCallback(() => {storageWrapper.saveTodo(todo)});

document.body.append(popUpElement);
sidebarHook.append(elementFactory.buildTodo(todo, contentHook));