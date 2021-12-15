const currentSubsectionReducer = (state = null, action) => {
    switch(action.type) {

        case 'SET_CURRENT_SUBSECTION':
            return action.currentSubsection
        
        case 'REMOVE_CURRENT_SUBSECTION':
            return null
        
        default:
            return state

    }
}

export default currentSubsectionReducer