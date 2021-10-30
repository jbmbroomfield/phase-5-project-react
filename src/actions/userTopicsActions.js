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

export const subscribeToTopic = topicId => (
    dispatch => {
        api(`user_topics/${topicId}/subscribe`)
        .then(json => {
            dispatch(addUserTopic(json.data))
        })
    }
)

export const unsubscribeToTopic = topicId => (
    dispatch => {
        api(`user_topics/${topicId}/unsubscribe`)
        .then(json => {
            dispatch(addUserTopic(json.data))
        })
    }
)