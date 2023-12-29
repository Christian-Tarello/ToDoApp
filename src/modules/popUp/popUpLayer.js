import createPopUp from "./popUp";

export default class PopupLayer {
    constructor(contentHook) {
        this.contentHook = contentHook;
        this.contentHook.classList.add('popUpLayer');
    }

    addPopUp(element, clickLock, backgroundColor, position) {
        const popUp = createPopUp(element, clickLock, backgroundColor, position)
        this.contentHook.append(popUp);
    }
}