import addOrUpdate from "./addOrUpdate"

const userTopicsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_USER_TOPIC':
            return addOrUpdate(state, action.userTopic)

        default:
            return state
    }
}

export default userTopicsReducer