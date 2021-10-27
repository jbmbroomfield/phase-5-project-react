export const setCurrentUser = currentUser => ({
    type: 'SET_CURRENT_USER',
    currentUser
})

export const removeCurrentUser = () => ({
    type: 'REMOVE_CURRENT_USER'
})