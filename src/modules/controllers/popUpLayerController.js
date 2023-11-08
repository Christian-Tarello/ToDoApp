import PubSub from "pubsub-js";
import Topics from "../utils/topics";

export default class PopUpLayerController {
    constructor(view) {
        this.view = view;
        this.element = undefined;
        this.scrollLocks = new Set();
        this.clickLocks = new Set();
        this.setInteractions();
    }

    setInteractions() {
        PubSub.subscribe(Topics.ADD_POP_UP, (msg, element) => {this.addPopUp(element)});
        PubSub.subscribe(Topics.ADD_SCROLL_LOCK, (msg, popUpId) => {this.addScrollLock(popUpId)});
        PubSub.subscribe(Topics.REMOVE_SCROLL_LOCK, (msg, popUpId) => {this.removeScrollLock(popUpId)});
        PubSub.subscribe(Topics.ADD_CLICK_LOCK, (msg, popUpId) => {this.addClickLock(popUpId)});
        PubSub.subscribe(Topics.REMOVE_CLICK_LOCK, (msg, popUpId) => {this.removeClickLock(popUpId)});
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
        if (this.scrollLocks.size === 0) {
            this.view.unlockScrolling();
        }
    }

    addClickLock(popUpId) {
        this.clickLocks.add(popUpId);
        this.view.lockClicking();
    }

    removeClickLock(popUpId) {
        this.clickLocks.delete(popUpId);
        if (this.clickLocks.size === 0) {
            this.view.unlockClicking();
        }
    }
}