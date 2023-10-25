import PubSub from "pubsub-js";
import Messages from "../../utils/messages";

export default class PopUpLayerController {
    constructor(view) {
        this.view = view;
        this.element = undefined;
        this.scrollLocks = new Set();
        this.clickLocks = new Set();
        this.setInteractions();
    }

    setInteractions() {
        PubSub.subscribe(Messages.ADD_POP_UP, (msg, element) => {this.addPopUp(element)});
        PubSub.subscribe(Messages.ADD_SCROLL_LOCK, (msg, popUpId) => {this.addScrollLock(popUpId)});
        PubSub.subscribe(Messages.REMOVE_SCROLL_LOCK, (msg, popUpId) => {this.removeScrollLock(popUpId)});
        PubSub.subscribe(Messages.ADD_CLICK_LOCK, (msg, popUpId) => {this.addClickLock(popUpId)});
        PubSub.subscribe(Messages.REMOVE_CLICK_LOCK, (msg, popUpId) => {this.removeClickLock(popUpId)});
    }

    addPopUp(element) {
        this.view.addPopUp(element);
    }

    addScrollLock(popUpId) {
        this.scrollLocks.add(popUpId);
        this.view.lockScrolling();
    }

    removeScrollLock(popUpId) {
        this.scrollLocks.add(popUpId);
        if (this.scrollLocks.keys.length === 0) {
            this.view.unlockScrolling();
        }
    }

    addClickLock(popUpId) {
        this.clickLocks.add(popUpId);
        this.view.lockClicking();
    }

    removeClickLock(popUpId) {
        this.clickLocks.delete(popUpId);
        if (this.clickLocks.keys.length === 0) {
            this.view.unlockClicking();
        }
    }
}