const PopUpMessages = Object.freeze({
    ADD_POP_UP: "ADD POP UP",
    ADD_SCROLL_LOCK: "ADD SCROLL LOCK",
    REMOVE_SCROLL_LOCK: "REMOVE_SCROLL_LOCK",
    ADD_CLICK_LOCK: "ADD CLICK LOCK",
    REMOVE_CLICK_LOCK: "REMOVE CLICK LOCK",
});

const ModelMessages = Object.freeze({
    NEW_TASK: "NEW TASK",
    NEW_PROJECT: "NEW PROJECT",
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