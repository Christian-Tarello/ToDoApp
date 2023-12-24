import Positions from "./popUpPositions";

export default function createPopUp(element, clickLock = false, scrollLock = false, backgroundColor = "#ffffff00", position = Positions.CENTER) {
    const popUp = document.createElement('div');
    popUp.append(element);
    popUp.classList.add('popUp');
    popUp.classList.add(position);
    popUp.style.backgroundColor = backgroundColor;

    if (clickLock) {
        popUp.classList.add('popUp--clickLocked');
    }

    if (scrollLock) {
        popUp.classList.add('popUp--scrollLocked');
    }

    const observer = new MutationObserver((mutationList, observer) => {
        popUp.remove();
        observer.disconnect();
    })

    observer.observe(popUp, { childList: true });

    return popUp;
}