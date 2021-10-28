import api from '../api'

const addPosts = posts => ({
    type: 'ADD_POSTS',
    posts
})

export const fetchPosts = topicId => (
    dispatch => {
        api(`topics/${topicId}/posts`)
        .then(json => {
            dispatch(addPosts(json.data))
        })
    }
)

export const createPost = (topicId, text) => (
    dispatch => {
        const jwt = localStorage.getItem('jwt')
        const body = {
            "post": {
                "text": text
            }
        }
        api(`topics/${topicId}/posts`, jwt, 'POST', body)
        .then(json => dispatch(fetchPosts(topicId)))
    }
)