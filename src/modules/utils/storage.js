export default class StorageWrapper {
    constructor(storageMechanism) {
        this.storageMechanism = storageMechanism;
    }

    saveTodo(todo) {
        this.storageMechanism.setItem('todo', JSON.stringify(todo.getData()));
    }

    getTodo() {
        return JSON.parse(this.storageMechanism.getItem('todo'));
    }
}