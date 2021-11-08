const initialState = {
    topicId: null,
    page: 1,
    pages: null,
    scrollId: null,
    users: {
        exclude: [],
        include: null,
    },
    flags: {},
}

const topicDisplayReducer = (state = {...initialState}, action) => {
    switch(action.type) {

        case 'SET_TOPIC_ID':
            if (state.topicId !== null && state.topicId !== action.topicId) {
                return {
                    ...initialState,
                    topicId: action.topicId,
                }
            }
            return {
                ...state,
                topicId: action.topicId,
            }
        
        case 'SET_TOPIC_DISPLAY':
            return {
                ...state,
                ...action.topicDisplay,
            }

        case 'TOGGLE_USER_FILTER':
            let newUsersExclude, newUsersInclude, array
            if (state.users.include) {
                newUsersInclude = state.users.include
                array = newUsersInclude
                newUsersExclude = null
            } else {
                newUsersExclude = state.users.exclude
                array = newUsersExclude
                newUsersInclude = null
            }
            // const newUsersExclude = state.users.exclude ? [...state.users.exclude] : []
            const userIndex = array.indexOf(action.user)
            if (userIndex === -1) {
                array.push(action.user)
            } else {
                array.splice(userIndex, 1)
            }
            return {
                ...state,
                page: 1,
                users: {
                    ...state.users,
                    exclude: newUsersExclude,
                    include: newUsersInclude,
                }
            }
        
        case 'EXCLUDE_ALL_USERS':
            return {
                ...state,
                page: 1,
                users: {
                    exclude: null,
                    include: [],
                }
            }

        case 'INCLUDE_ALL_USERS':
            return {
                ...state,
                page: 1,
                users: {
                    include: null,
                    exclude: []
                }
            }

        case 'SET_PAGE':
            return {
                ...state,
                page: action.page || state.page,
            }

        case 'SET_PAGES':
            return {
                ...state,
                pages: action.pages,
            }

        case 'SET_SCROLL_ID':
            console.log(action.scrollId)
            return {
                ...state,
                scrollId: action.scrollId,
            }

        case 'RESET_TOPIC_DISPLAY':
            return {...initialState}

        default:
            return state

    }
}

export default topicDisplayReducer