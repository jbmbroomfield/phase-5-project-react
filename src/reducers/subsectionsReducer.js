const subsectionsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_SUBSECTIONS':
            return action.subsections

        default:
            return state

    }

}

export default subsectionsReducer