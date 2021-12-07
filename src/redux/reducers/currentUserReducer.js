const currentUserReducer = (state = null, action) => {
    switch(action.type) {

        case 'SET_CURRENT_USER':
            return action.currentUser
        
        case 'REMOVE_CURRENT_USER':
            localStorage.removeItem('jwt')
            return null

        case 'SET_GUEST_DATA':
            const newState = { ...state }
            if (newState.attributes && newState.attributes.account_level === 'guest') {
                newState.attributes.guest_data = true
            }
            return newState

        default:
            return state

    }
}

export default currentUserReducer