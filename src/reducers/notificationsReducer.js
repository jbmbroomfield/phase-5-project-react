const notificationsReducer = (state = [], action) => {
    console.log(action)
    switch(action.type) {

        case 'ADD_NOTIFICATIONS':
            return action.notifications

        default:
            return state

    }
}

export default notificationsReducer