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
    CREATE_TASK: "CREATE TASK",
    CREATE_PROJECT: "CREATE PROJECT",
});

const ElementMessages = Object.freeze({
    BUILT_TASK: "BUILT_TASK",
    BUILT_PROJECT: "BUILT PROJECT",
    BUILT_TASK_INPUT: "BUILT_TASK_INPUT",
    BUILT_EDIT_TASK_INPUT: "BUILT EDIT TASK INPUT",
});

const ElementRemovalMessages = Object.freeze({
    REMOVE_TASK_INPUT: "REMOVE TASK INPUT",
    REMOVE_TASK: "REMOVE_TASK",
});

const Messages = Object.freeze({
    ...PopUpMessages,
    ...ModelMessages,
    ...ModelRequestMessages,
    ...ElementMessages,
    ...ElementRemovalMessages
});

export default Messages;