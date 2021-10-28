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