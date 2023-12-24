import createPopUp from "./popUp";

export default class PopupLayer {
    constructor(contentHook) {
        this.contentHook = contentHook;
    }

    addPopUp(element, clickLock, scrollLock, backgroundColor, position) {
        const popUp = createPopUp(element, clickLock, scrollLock, backgroundColor, position)
        this.contentHook.append(popUp);
    }
}