export default class PopUpLayerView {
    constructor() {
        this.element = undefined;
        this.layeredElement = document.querySelector('body');
    }

    build() {
        this.element = document.createElement('div');
        return this.element;
    }

    addPopUp(element) {
        this.element.append(element);
    }

    lockScrolling() {
        this.layeredElement.classList.add('popUpLayer--scrollLocked');
    }

    unlockScrolling() {
        this.layeredElement.classList.remove('popUpLayer--scrollLocked');
    }

    lockClicking() {
        this.element.classList.add('popUpLayer--clickLocked');
    }

    unlockClicking() {
        this.element.classList.remove('popUpLayer--clickLocked');
    }
}