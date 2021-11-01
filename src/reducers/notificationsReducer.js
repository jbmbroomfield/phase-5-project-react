const notificationsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_NOTIFICATIONS':
            return action.notifications

        default:
            return state

    }
}

export default notificationsReducer