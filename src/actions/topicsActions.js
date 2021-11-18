import API from './API'

const addTopics = topics => ({
    type: 'ADD_TOPICS',
    topics
})

export const updateSlug = (oldSlug, newSlug) => ({
    type: 'UPDATE_SLUG',
    oldSlug,
    newSlug,
})

export const fetchTopics = subsectionSlug => (
    dispatch => {
        API.get(`forum/${subsectionSlug}/topics`)
        .then(json => {
            console.log(json)
            json.data && dispatch(addTopics(json.data))
        })
    }
)

export const fetchTopic = (subsectionSlug, topicSlug) => (
    dispatch => {
        API.get(`forum/${subsectionSlug}/${topicSlug}`)
        .then(json => {
            json.data && dispatch(addTopics([json.data]))
        })
    }
)

export const createTopic = (subsectionSlug, title, redirect) => (
    dispatch => {
        const body = {
            "topic": {
                "title": title
            },
        }
        API.post(`forum/${subsectionSlug}/topics`, body)
        .then(json => json.data && redirect(json.data))
    }
)

export const editTopic = (subsectionSlug, topicSlug, attributes) => (
    dispatch => {
        const body = {
            topic: attributes
        }
        API.patch(`forum/${subsectionSlug}/${topicSlug}`, body)
    }
)