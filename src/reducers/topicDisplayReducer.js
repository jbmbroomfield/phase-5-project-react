const initialState = {
    page: 1,
    users: {},
    flags: {},
}

const topicDisplayReducer = (state = {...initialState}, action) => {
    switch(action.type) {

        case 'SET_PAGE':
            return {
                ...state,
                page: action.page
            }

        case 'RESET':
            return {...initialState}

        default:
            return state

    }
}

export default topicDisplayReducer