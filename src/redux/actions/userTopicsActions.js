import API from './API'

// const addUserTopic = userTopic => ({
//     type: 'ADD_USER_TOPIC',
//     userTopic,
// })

const addUserTopics = userTopics => ({
    type: 'ADD_USER_TOPICS',
    userTopics,
})

export const fetchUserTopics = subsectionSlug => (
    dispatch => {
        API.get(`user_topics/${subsectionSlug}`)
        .then(json => {
            const user_topics = json.data
            if (!user_topics) {
                return
            }
            console.log(user_topics)
            dispatch(addUserTopics(user_topics))
        })
    }
)

export const fetchUserTopic = (subsectionSlug, topicSlug) => (
    dispatch => {
        API.get(`user_topics/${subsectionSlug}/${topicSlug}`)
        .then(json => {
            const user_topic = json.data
            if (!user_topic) {
                return
            }
            dispatch(addUserTopics(user_topic))
        })
    }
)

export const subscribeToTopic = (subsectionSlug, topicSlug, subscribed) => (
    dispatch => {
        API.post(`user_topics/${subsectionSlug}/${topicSlug}/subscribe`, {subscribed: subscribed})
        .then(json => {
            const user_topic = json.data
            if (!user_topic) {
                return
            }
            dispatch(addUserTopics(user_topic))
        })
    }
)

export const updateUserTopic = (subsectionSlug, topicSlug, body) => (
    dispatch => {
        API.patch(`user_topics/${subsectionSlug}/${topicSlug}`, body)
        .then(json => {
            const user_topic = json.data
            if (!user_topic) {
                return
            }
            dispatch(addUserTopics(user_topic))
        })
    }
)