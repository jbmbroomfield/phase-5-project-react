import addOrUpdate from "./addOrUpdate"

const topicsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_TOPICS':
            return addOrUpdate(state, action.topics)
        
        case 'UPDATE_SLUG':
            const newState = [...state]
            const topic = newState.find(topic => topic.attributes.slug = action.oldSlug)
            topic.attributes.slug = action.newSlug
            return newState.filter(topic => topic.attributes.slug !== action.oldSlug)

        default:
            return state

    }
}

export default topicsReducer