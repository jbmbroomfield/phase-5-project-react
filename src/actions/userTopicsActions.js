import api from './api'

const addUserTopic = userTopic => ({
    type: 'ADD_USER_TOPIC',
    userTopic
})

export const fetchUserTopic = topicId => (
    dispatch => {
        api(`user_topics/${topicId}`)
        .then(json => {
            dispatch(addUserTopic(json.data))
        })
    }
)

export const subscribeToTopic = (topicId, subscribed) => (
    dispatch => {
        api(`user_topics/${topicId}/subscribe`, {subscribed: subscribed})
        .then(json => {
            dispatch(addUserTopic(json.data))
        })
    }
)

export const unsubscribeToTopic = topicId => (
    dispatch => {
        api(`user_topics/${topicId}/unsubscribe`, {subscribed: true})
        .then(json => {
            dispatch(addUserTopic(json.data))
        })
    }
)