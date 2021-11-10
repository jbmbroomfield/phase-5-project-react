import addOrUpdate from "./addOrUpdate"

const postsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_POSTS':
            return addOrUpdate(state, action.posts)
            // let newState = [...state]
            // for (const newPost of action.posts) {
            //     newState = addOrUpdate(newState, newPost)
            // }
            // return newState

        default:
            return state
            
    }
}

// const appendNewPost = (state, newPost) => {
//     const newState = [...state]
//     const existingPost = newState.find(ep => (
//         parseInt(ep.id) === parseInt(newPost.id)
//     ))
//     if (existingPost) {
//         existingPost.attributes = {...newPost.attributes}
//     } else {
//         newState.push(newPost)
//     }
//     return newState
// }

export default postsReducer