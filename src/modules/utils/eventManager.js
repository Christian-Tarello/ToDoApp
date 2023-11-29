export default class EventManager {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(new WeakRef(observer));
    }

    removeObserver(observer) {
        const index = this.observers.findIndex((ref) => ref.deref() === observer);
        this.observers.splice(index, 1);
    }

    updateObservers() {
        this.observers.forEach((ref, index) => {
            const observer = ref.deref();
            if (observer) {
                observer.update();
            } else {
                this.observers.splice(index, 1);
            }
        }
        );
    }
}