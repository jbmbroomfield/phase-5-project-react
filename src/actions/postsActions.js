import API from './API'
import { setScrollId } from './topicDisplayActions'

const addPosts = posts => ({
    type: 'ADD_POSTS',
    posts
})

export const fetchPosts = topicId => (
    dispatch => {
        API.get(`topics/${topicId}/posts`)
        .then(json => {
            json.data && dispatch(addPosts(json.data))
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
        .then(json => {
            dispatch(fetchPosts(topicId))
            dispatch(setScrollId(json.data.attributes.tag))
        })
    }
)