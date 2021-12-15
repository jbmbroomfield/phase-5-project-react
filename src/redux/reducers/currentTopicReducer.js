const currentTopicReducer = (state = null, action) => {
    switch(action.type) {

        case 'SET_CURRENT_TOPIC':
            return action.currentTopic
        
        case 'REMOVE_CURRENT_TOPIC':
            return null
        
        default:
            return state

    }
}

export default currentTopicReducer