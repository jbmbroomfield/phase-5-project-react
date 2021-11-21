const currentUserReducer = (state = null, action) => {
    switch(action.type) {

        case 'SET_CURRENT_USER':
            return action.currentUser
        
        case 'REMOVE_CURRENT_USER':
            localStorage.removeItem('jwt')
            return null

        default:
            return state

    }
}

export default currentUserReducer