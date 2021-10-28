const topicsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_TOPICS':
            return action.topics
        
        default:
            return state

    }
}

export default topicsReducer