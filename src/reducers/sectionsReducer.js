const sectionsReducer = (state = [], action) => {
    switch(action.type) {
        
        case 'ADD_SECTIONS':
            return action.sections
        
        default:
            return state

    }
}

export default sectionsReducer