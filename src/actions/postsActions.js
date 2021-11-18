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

export const createPost = (subsectionSlug, topicSlug, text, then = () => {}) => (
    dispatch => {
        const body = {
            "post": {
                "text": text
            }
        }
        API.post(`forum/${subsectionSlug}/${topicSlug}/posts`, body)
        .then(json => {
            // dispatch(fetchPosts(topicId))
            if (json.data) {
                const post = json.data
                dispatch(fetchPost(post.id))
                dispatch(setScrollId(post.attributes.tag))
                then(post)
            }
        })
    }
)