import api from '../api'

const addTopics = topics => ({
    type: 'ADD_TOPICS',
    topics
})

export const fetchTopics = () => (
    dispatch => {
        api('topics')
        .then(json => {
            dispatch(addTopics(json.data))
        })
    }
)

export const createTopic = (subsectionId, title, text, redirect) => (
    dispatch => {
        const jwt = localStorage.getItem('jwt')
        const body = {
            "topic": {
                "title": title
            },
            "post": {
                "text": text
            }
        }
        api(`subsections/${subsectionId}/topics`, jwt, 'POST', body)
        .then(json => redirect(json.data.id))
        // .then(json => dispatch(fetchTopics()))
    }
)