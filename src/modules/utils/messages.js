const PopUpMessages = Object.freeze({
    POP_UP_TOPIC: "POP_UP",
    ADD_POP_UP: "POP_UP.ADD",
    ADD_SCROLL_LOCK: "POP_UP.ADD_SCROLL_LOCK",
    REMOVE_SCROLL_LOCK: "POP_UP.REMOVE_SCROLL_LOCK",
    ADD_CLICK_LOCK: "POP_UP.ADD_CLICK_LOCK",
    REMOVE_CLICK_LOCK: "POP_UP.REMOVE_CLICK_LOCK",
});

const ModelMessages = Object.freeze({
    MODEL_TOPIC: "MODEL",
    TASK: "MODEL.TASK",
    PROJECT: "MODEL.PROJECT",
});

const ModelRequestMessages = Object.freeze({
    MODEL_CREATION_TOPIC: "MODEL_CREATION",
    CREATE_TASK: "MODEL_CREATION.TASK",
    CREATE_PROJECT: "MODEL_CREATION.PROJECT",
});

const ElementMessages = Object.freeze({
    ELEMENT_TOPIC: "ELEMENT",
    TASK_ELEMENT: "ELEMENT.TASK",
    PROJECT_ELEMENT: "ELEMENT.TASK",
    TASK_CREATION_INPUT_ELEMENT: "ELEMENT.TASK_CREATION_INPUT",
    TASK_EDITION_INPUT_ELEMENT: "ELEMENT.TASK_EDITION_INPUT",
});

const ElementRemovalMessages = Object.freeze({
    ELEMENT_REMOVAL_TOPIC: "ELEMENT.REMOVE",
    REMOVE_TASK_CREATION_INPUT_ELEMENT: "ELEMENT.REMOVE.TASK_CREATION_INPUT",
    REMOVE_TASK_ELEMENT: "ELEMENT.REMOVE.TASK",
});

const Messages = Object.freeze({
    ...PopUpMessages,
    ...ModelMessages,
    ...ModelRequestMessages,
    ...ElementMessages,
    ...ElementRemovalMessages
});

export default Messages;