const initialState = {
    requesting: false,
    username: null
}

const currentUserReducer = (
    state = { ...initialState },
    action
) => {
    switch(action.type) {
        
        case 'START_SETTING_CURRENT_USER':
            console.log('starting to set current user')
            return {
                ...state,
                requesting: true
            }

        case 'SET_CURRENT_USER':
            console.log('setting current user')
            return {
                ...state,
                requesting: false,
                username: action.currentUser.username,
            }
        
        case 'REMOVE_CURRENT_USER':
            console.log('removing current user')
            return { ...initialState }

        default:
            return state

    }
}

export default currentUserReducer