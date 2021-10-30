import api from './api'

const addUserTopic = userTopic => ({
    type: 'ADD_USER_TOPIC',
    userTopic
})

export const fetchUserTopic = (topicId) => (
    dispatch => {
        api(`user_topics/${topicId}`)
        .then(json => {
            console.log(json)
            dispatch(addUserTopic(json.data))
        })
    }
)