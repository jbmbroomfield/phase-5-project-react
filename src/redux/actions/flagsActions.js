import API from "./API"
import { fetchPosts } from "./postsActions"

export const createFlag = (topicId, postId, category) => {
    return dispatch => {
        console.log('creating flag')
        const body = {
            flag: {
                category: category
            }
        }
        API.post(`posts/${postId}/flags`, body)
        .then((json) => {
            dispatch(fetchPosts(topicId))
        })
    }
}

export const deleteFlag = (topicId, postId, category) => {
    return dispatch => {
        console.log('deleting flag')
        const body = {
            flag: {
                category: category
            }
        }
        API.delete(`posts/${postId}/flags`, body)
        .then((json) => {
            dispatch(fetchPosts(topicId))
        })
    }
}