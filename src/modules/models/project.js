import { getDay, isThisWeek, isToday, isValid } from "date-fns";
import CollectionWrapper from "../utils/collectionWrapper";
import EventManager from "../utils/eventManager";

export default class Project {
    constructor(name, items) {
        this.name = name;
        this.collection = new CollectionWrapper(items);
        this.items.forEach((item) => item.link(this));
        this.eventManager = new EventManager();
        this.projectCollection = undefined;
    }

    get items() {
        return this.collection.items;
    }

    add(item) {
        this.collection.add(item);
        item.link(this);
        this.updateObservers();
    }

    remove(item) {
        this.collection.remove(item);
        this.updateObservers();
    }

    unlink() {
        if (this.projectCollection) {
            this.projectCollection.remove(this);
        }
    }

    link(projectCollection) {
        this.unlink();
        this.projectCollection = projectCollection;
    }

    getDueToday() {
        const due = this.items.filter((item) => 
            isValid(item.dueDate) && isToday(item.dueDate)
        );
        return due;
    }

    getDueThisWeek() {
        const todayWeekDay = getDay(new Date());
        const due = this.items.filter((item) =>
            isValid(item.dueDate) && isThisWeek(item.dueDate, {weekStartsOn: todayWeekDay})   
        );
        return due;
    }

    getById(id) {
        return this.items.find((item) => item.id === id);
    }

    removeById(id) {
        const item = this.getById(id);
        this.remove(item);
        this.updateObservers();
    }

    addObserver(observer) {
        this.eventManager.addObserver(observer);
    }

    removeObserver(observer) {
        this.eventManager.removeObserver(observer);
    }

    updateObservers() {
        this.eventManager.updateObservers();
    }

    setState(object) {
        Object.entries(object).forEach(
            ([key, value] = entry) => {
                this[key] = value;
            }
        );
        this.updateObservers();
    }
}