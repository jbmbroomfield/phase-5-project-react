import API from './API'

const addUserTopic = userTopic => ({
    type: 'ADD_USER_TOPIC',
    userTopic
})

export const fetchUserTopic = (subsectionSlug, topicSlug) => (
    dispatch => {
        API.get(`user_topics/${subsectionSlug}/${topicSlug}`)
        .then(json => {
            json.data && dispatch(addUserTopic(json.data))
        })
    }
)

export const subscribeToTopic = (subsectionSlug, topicSlug, subscribed) => (
    dispatch => {
        API.post(`user_topics/${subsectionSlug}/${topicSlug}/subscribe`, {subscribed: subscribed})
        .then(json => {
            json.data && dispatch(addUserTopic(json.data))
        })
    }
)