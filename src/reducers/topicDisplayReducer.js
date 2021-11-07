const initialState = {
    page: 1,
    pages: null,
    users: {},
    flags: {},
}

const topicDisplayReducer = (state = {...initialState}, action) => {
    switch(action.type) {

        case 'SET_PAGE':
            return {
                ...state,
                page: action.page || state.page,
            }

        case 'SET_PAGES':
            console.log('setting pages to', action.pages)
            return {
                ...state,
                pages: action.pages,
            }

        case 'RESET_TOPIC_DISPLAY':
            return {...initialState}

        default:
            return state

    }
}

export default topicDisplayReducer