import API from './API'
import { setScrollId } from './scrollIdActions'

const addPosts = posts => ({
    type: 'ADD_POSTS',
    posts
})

export const fetchPosts = (subsectionSlug, topicSlug) => (
    dispatch => {
        API.get(`forum/${subsectionSlug}/${topicSlug}/posts`)
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

export const createPost = (subsectionSlug, topicSlug, text) => (
    dispatch => {
        const body = {
            "post": {
                "text": text
            }
        }
        API.post(`forum/${subsectionSlug}/${topicSlug}/posts`, body)
        .then(json => {
            // dispatch(fetchPosts(topicId))
            json.data && dispatch(fetchPost(json.data.id))
            json.data && dispatch(setScrollId(json.data.attributes.tag))
        })
    }
)