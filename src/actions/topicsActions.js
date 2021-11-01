import API from './API'

const addTopics = topics => ({
    type: 'ADD_TOPICS',
    topics
})

export const fetchTopics = () => (
    dispatch => {
        API.get('topics')
        .then(json => {
            dispatch(addTopics(json.data))
        })
    }
)

export const createTopic = (subsectionId, title, text, redirect) => (
    dispatch => {
        const body = {
            "topic": {
                "title": title
            },
            "post": {
                "text": text
            }
        }
        API.post(`subsections/${subsectionId}/topics`, body)
        .then(json => redirect(json.data.id))
    }
)