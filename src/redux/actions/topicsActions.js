import API from './API'
import { setCurrentTopic } from './currentTopicActions'
import { setGuestData } from './currentUserActions'
import { fetchUserTopic, fetchUserTopics } from './userTopicsActions'

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
            const topics = json.data
            if (!topics) {
                return 
            }
            dispatch(addTopics(topics))
        })
        dispatch(fetchUserTopics(subsectionSlug))
    }
)

export const fetchTopic = (subsectionSlug, topicSlug, errorRedirect = null) => (
    dispatch => {
        API.get(`forum/${subsectionSlug}/${topicSlug}`)
        .then(json => {
            const topic = json.data
            if (!topic) {
                errorRedirect && errorRedirect()
                return
            }
            dispatch(setCurrentTopic(topic))
            if (topic.attributes.who_can_view === 'url') {
                dispatch(setGuestData())
            }
            dispatch(addTopics([topic]))
        })
        dispatch(fetchUserTopic(subsectionSlug, topicSlug))
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
        .then(json => {
            const topic = json.data
            if (!topic) {
                return
            }
            fetchTopic(subsectionSlug, topicSlug)
        })
    }
)

export const addViewer = (subsectionSlug, topicSlug, viewerSlug) => (
    dispatch => {
        const body = {
            viewer_slug: viewerSlug
        }
        API.patch(`forum/${subsectionSlug}/${topicSlug}/add-viewer`, body)
        .then(json => dispatch(fetchTopic(subsectionSlug, topicSlug)))
    }
)

export const addPoster = (subsectionSlug, topicSlug, posterSlug, password, then) => (
    dispatch => {
        const body = {
            poster_slug: posterSlug,
            password: password,
        }
        API.patch(`forum/${subsectionSlug}/${topicSlug}/add-poster`, body)
        .then(json => {
            dispatch(fetchTopic(subsectionSlug, topicSlug))
            if (then) {
                then()
            }
        })
    }
)