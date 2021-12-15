const currentUserTopicReducer = (state = null, action) => {
    switch(action.type) {

        case 'SET_CURRENT_USER_TOPIC':
            return action.currentUserTopic
        
        case 'REMOVE_CURRENT_USER_TOPIC':
            return null
        
        default:
            return state

    }
}

export default currentUserTopicReducer