export default class ChangeListenerProxy {
    constructor(callback = (() => {return;})) {
        this.callback = callback;
    }

    setCallback(callback) {
        this.callback = callback;
    }

    wrapObject(obj) {
        // This additional line makes sure that when the callback is called the callback will be the one
        // stored currently in this.callback
        const callback = () => {this.callback()};
        return new Proxy(obj, {
            set(target, property, value) {
                target[property] = value;
                callback();
                return true;
            }
        });
    }
}