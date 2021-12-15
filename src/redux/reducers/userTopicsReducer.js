import addOrUpdate from "./addOrUpdate"

const userTopicsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_USER_TOPICS':
            return addOrUpdate(state, action.userTopics)

        default:
            return state
    }
}

export default userTopicsReducer