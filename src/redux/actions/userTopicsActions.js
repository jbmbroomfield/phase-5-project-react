import API from './API'

const addUserTopic = userTopic => ({
    type: 'ADD_USER_TOPIC',
    userTopic
})

export const fetchUserTopic = topicId => (
    dispatch => {
        API.get(`user_topics/${topicId}`)
        .then(json => {
            json.data && dispatch(addUserTopic(json.data))
        })
    }
)

export const subscribeToTopic = (topicId, subscribed) => (
    dispatch => {
        API.post(`user_topics/${topicId}/subscribe`, {subscribed: subscribed})
        .then(json => {
            json.data && dispatch(addUserTopic(json.data))
        })
    }
)