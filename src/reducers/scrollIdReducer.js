const scrollIdReducer = (state = null, action) => {
    switch(action.type) {

        case 'SET_SCROLL_ID':
            return action.id

        default:
            return state

    }
}

export default scrollIdReducer