export const setCurrentSubsection = currentTopic => ({
    type: 'SET_CURRENT_TOPIC',
    currentTopic,
})

export const removeCurrentTopic = () => ({
    type: 'REMOVE_CURRENT_TOPIC',
})