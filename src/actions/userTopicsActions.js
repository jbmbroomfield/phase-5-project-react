import api from '../api'

const addUserTopic = userTopic => ({
    type: 'ADD_USER_TOPIC',
    userTopic
})

export const fetchUserTopic = (topicId) => (
    dispatch => {
        const jwt = localStorage.getItem('jwt')
        api(`user_topics/${topicId}`, jwt)
        .then(json => {
            console.log(json)
            dispatch(addUserTopic(json.data))
        })
    }
)