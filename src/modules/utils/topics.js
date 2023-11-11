const PopUpTopics = Object.freeze({
    POP_UP_TOPIC: "POP_UP",
    ADD_POP_UP: "POP_UP.ADD",
    ADD_SCROLL_LOCK: "POP_UP.ADD_SCROLL_LOCK",
    REMOVE_SCROLL_LOCK: "POP_UP.REMOVE_SCROLL_LOCK",
    ADD_CLICK_LOCK: "POP_UP.ADD_CLICK_LOCK",
    REMOVE_CLICK_LOCK: "POP_UP.REMOVE_CLICK_LOCK",
});

const FinalizeElementTopics = Object.freeze({
    FINALIZE_ELEMENT_TOPIC: "ELEMENT.FINALIZE",
    FINALIZE_ALL_TASKS: "ELEMENT.FINALIZE.ALL_TASKS"
})

const Topics = Object.freeze({
    ...PopUpTopics,
    ...FinalizeElementTopics
});

export default Topics;