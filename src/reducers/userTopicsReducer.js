const userTopicsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_USER_TOPIC':
            return [
                ...state.filter(userTopic => (
                    userTopic && (
                        parseInt(userTopic.attributes.topic_id) !== parseInt(action.userTopic.attributes.topic_id)
                    )
                )),
                action.userTopic
            ]

        default:
            return state
    }
}

export default userTopicsReducer