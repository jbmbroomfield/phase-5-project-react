import API from './API'

const addPosts = posts => ({
    type: 'ADD_POSTS',
    posts
})

export const fetchPosts = topicId => (
    dispatch => {
        API.get(`topics/${topicId}/posts`)
        .then(json => {
            dispatch(addPosts(json.data))
        })
    }
)

export const createPost = (topicId, text) => (
    dispatch => {
        const body = {
            "post": {
                "text": text
            }
        }
        API.post(`topics/${topicId}/posts`, body)
        .then(json => dispatch(fetchPosts(topicId)))
    }
)