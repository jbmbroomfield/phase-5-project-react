const currentUserReducer = (state = {}, action) => {
    switch(action.type) {
        
        case 'SET_CURRENT_USER':
            console.log('setting current user')
            return action.currentUser
        
        case 'REMOVE_CURRENT_USER':
            console.log('removing current user')
            return {}

        default:
            return state

    }
}

export default currentUserReducer