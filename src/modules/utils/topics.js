const PopUpTopics = Object.freeze({
    POP_UP_TOPIC: "POP_UP",
    ADD_POP_UP: "POP_UP.ADD",
    ADD_SCROLL_LOCK: "POP_UP.ADD_SCROLL_LOCK",
    REMOVE_SCROLL_LOCK: "POP_UP.REMOVE_SCROLL_LOCK",
    ADD_CLICK_LOCK: "POP_UP.ADD_CLICK_LOCK",
    REMOVE_CLICK_LOCK: "POP_UP.REMOVE_CLICK_LOCK",
});

const ModelTopics = Object.freeze({
    MODEL_TOPIC: "MODEL",
    TASK: "MODEL.TASK",
    PROJECT: "MODEL.PROJECT",
});

const ModelRequestTopics = Object.freeze({
    MODEL_CREATION_TOPIC: "MODEL_CREATION",
    CREATE_TASK: "MODEL_CREATION.TASK",
    CREATE_PROJECT: "MODEL_CREATION.PROJECT",
});

const ElementTopics = Object.freeze({
    ELEMENT_TOPIC: "ELEMENT",
    TASK_ELEMENT: "ELEMENT.TASK",
    PROJECT_ELEMENT: "ELEMENT.TASK",
    TASK_CREATION_INPUT_ELEMENT: "ELEMENT.TASK_CREATION_INPUT",
    TASK_EDITION_INPUT_ELEMENT: "ELEMENT.TASK_EDITION_INPUT",
    CHECKLIST_ITEM_ELEMENT: "ELEMENT.CHECKLIST_ITEM_ELEMENT",
});

const ElementRemovalTopics = Object.freeze({
    ELEMENT_REMOVAL_TOPIC: "ELEMENT.REMOVE",
    REMOVE_TASK_CREATION_INPUT_ELEMENT: "ELEMENT.REMOVE.TASK_CREATION_INPUT",
    REMOVE_TASK_ELEMENT: "ELEMENT.REMOVE.TASK",
});

const Topics = Object.freeze({
    ...PopUpTopics,
    ...ModelTopics,
    ...ModelRequestTopics,
    ...ElementTopics,
    ...ElementRemovalTopics
});

export default Topics;