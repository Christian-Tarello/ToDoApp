import { getDay, isThisWeek, isToday, isValid } from "date-fns";
import CollectionWrapper from "../utils/collectionWrapper";

export default class Project extends CollectionWrapper {
    constructor(name, items) {
        super(items);
        this.name = name;
        this.observers = [];
    }

    add(item) {
        super.add(item);
        item.link(this);
        if (this.observers !== undefined) {this.updateObservers();}
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
        const position = this.items.indexOf(item);
        this.remove(position);
        this.updateObservers();
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    updateObservers() {
        this.observers.forEach((observer) => observer.update());
    }
}