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

export const fetchPost = postId => (
    dispatch => {
        API.get(`posts/${postId}`)
        .then(json => {
            json.data && dispatch(addPosts([json.data]))
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
        console.log(topicId)
        API.post(`topics/${topicId}/posts`, body)
        .then(json => {
            // dispatch(fetchPosts(topicId))
            console.log(json.data)
            json.data && dispatch(fetchPost(json.data.id))
            json.data && dispatch(setScrollId(json.data.attributes.tag))
        })
    }
)