export const setCurrentUserTopic = currentUserTopic => ({
    type: 'SET_CURRENT_USER_TOPIC',
    currentUserTopic,
})

export const removeCurrentUserTopic = () => ({
    type: 'REMOVE_CURRENT_USER_TOPIC',
})