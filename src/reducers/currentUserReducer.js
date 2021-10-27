const currentUserReducer = (state = {}, action) => {
    switch(action.type) {

        case 'SET_CURRENT_USER':
            return action.currentUser
        
        case 'REMOVE_CURRENT_USER':
            return {}

        default:
            return state

    }
}

export default currentUserReducer