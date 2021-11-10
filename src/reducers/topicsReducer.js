import addOrUpdate from "./addOrUpdate"

const topicsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_TOPICS':
            return addOrUpdate(state, action.topics)
        
        default:
            return state

    }
}

export default topicsReducer