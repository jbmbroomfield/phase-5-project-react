import getTopicDisplay from "getTopicDisplay"

const topicDisplaysReducer = (state = [], action) => {
    let newState, topicDisplay
    switch(action.type) {

        // case 'SET_TOPIC_ID':
        //     if (state.topicId !== null && state.topicId !== action.topicId) {
        //         return {
        //             ...initialTopicDisplay(null),
        //             topicId: action.topicId,
        //         }
        //     }
        //     return {
        //         ...state,
        //         topicId: action.topicId,
        //     }
        
        // case 'SET_TOPIC_DISPLAY':
        //     return addOrUpdate(state, action.topicDisplay)

        case 'TOGGLE_USER_FILTER':
            newState = [...state]
            topicDisplay = getTopicDisplay(newState, action.slug)
            let newUsersExclude, newUsersInclude, array
            if (topicDisplay.users.include) {
                newUsersInclude = topicDisplay.users.include
                array = newUsersInclude
                newUsersExclude = null
            } else {
                newUsersExclude = topicDisplay.users.exclude
                array = newUsersExclude
                newUsersInclude = null
            }
            // const newUsersExclude = topicDisplay.users.exclude ? [...topicDisplay.users.exclude] : []
            const userIndex = array.indexOf(action.user)
            if (userIndex === -1) {
                array.push(action.user)
            } else {
                array.splice(userIndex, 1)
            }
            topicDisplay.page = 1
            topicDisplay.users = {
                ...topicDisplay.users,
                exclude: newUsersExclude,
                include: newUsersInclude,
            }
            return newState

        case 'TOGGLE_FLAG_FILTER':
            newState = [...state]
            topicDisplay = getTopicDisplay(newState, action.slug)
            const newFlagsExclude = [...topicDisplay.flags.exclude]
            const newFlagsInclude = [...topicDisplay.flags.include]
            let index
            if (newFlagsExclude.includes(action.flag)) {
                index = newFlagsExclude.indexOf(action.flag)
                newFlagsExclude.splice(index, 1)
            } else if (newFlagsInclude.includes(action.flag)) {
                index = newFlagsInclude.indexOf(action.flag)
                newFlagsInclude.splice(index, 1)
                newFlagsExclude.push(action.flag)
            } else {
                newFlagsInclude.push(action.flag)
            }
            topicDisplay.page = 1
            topicDisplay.flags = {
                ...topicDisplay.flags,
                exclude: newFlagsExclude,
                include: newFlagsInclude,
            }
            return newState
        
        case 'EXCLUDE_ALL_USERS':
            newState = [...state]
            topicDisplay = getTopicDisplay(newState, action.slug)
            topicDisplay.page = 1
            topicDisplay.users = {
                exclude: null,
                include: [],
            }
            return newState

        case 'INCLUDE_ALL_USERS':
            newState = [...state]
            topicDisplay = getTopicDisplay(newState, action.slug)
            topicDisplay.page = 1
            topicDisplay.users = {
                exclude: [],
                include: null,
            }
            return newState

        case 'SET_PAGE':
            newState = [...state]
            topicDisplay = getTopicDisplay(newState, action.slug)
            topicDisplay.page = action.page
            return newState

        case 'SET_PAGES':
            newState = [...state]
            topicDisplay = getTopicDisplay(newState, action.slug)
            topicDisplay.pages = action.pages
            return newState

        // case 'SET_SCROLL_ID':
        //     console.log(action.scrollId)
        //     return {
        //         ...state,
        //         scrollId: action.scrollId,
            // }

        // case 'RESET_TOPIC_DISPLAY':
        //     return {...initialTopicDisplay(null)}

        default:
            return state

    }
}

export default topicDisplaysReducer