import addOrUpdate from "./addOrUpdate"

const postsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_POSTS':
            return addOrUpdate(state, action.posts)

        default:
            return state
            
    }
}

export default postsReducer