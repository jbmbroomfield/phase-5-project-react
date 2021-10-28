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