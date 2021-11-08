const initialState = {
    topicId: null,
    page: 1,
    pages: null,
    scrollId: null,
    users: {},
    flags: {},
}

const topicDisplayReducer = (state = {...initialState}, action) => {
    let newUsersExclude
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
        
        case 'INCLUDE_USER':
            newUsersExclude = state.users.exclude || []
            newUsersExclude = newUsersExclude.filter(user => user !== action.user)
            return {
                ...state,
                page: 1,
                users: {
                    ...state.users,
                    exclude: newUsersExclude
                }
            }

        case 'EXCLUDE_USER':
            newUsersExclude = state.users.exclude || []
            if (!newUsersExclude.includes(action.user)) {
                newUsersExclude.push(action.user)
            }
            return {
                ...state,
                page: 1,
                users: {
                    ...state.users,
                    exclude: newUsersExclude
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