import Positions from "./popUpPositions";

export default function createPopUp(element, clickLock = false, backgroundColor = "#ffffff00", position = Positions.CENTER) {
    const popUp = document.createElement('div');
    popUp.classList.add('popUp');
    popUp.classList.add(position);
    popUp.style.backgroundColor = backgroundColor;
    
    const popUpWrapper = document.createElement('div');
    popUpWrapper.classList.add('popUp-wrapper');

    popUpWrapper.append(element);
    popUp.append(popUpWrapper);
    
    if (clickLock) {
        popUp.classList.add('popUp--clickLocked');
    }

    const observer = new MutationObserver((mutationList, observer) => {
        popUp.remove();
        observer.disconnect();
    })

    observer.observe(popUpWrapper, { childList: true });

    return popUp;
}