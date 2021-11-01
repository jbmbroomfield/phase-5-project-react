import api from './api'

const addNotifications = notifications => ({
    type: 'ADD_NOTIFICATIONS',
    notifications
})

export const fetchNotifications = () => (
    dispatch => {
        api('notifications')
        .then(json => {
            dispatch(addNotifications(json.data))
        })
    }
)

export const deleteNotification = notificationId => (
    dispatch => {
        api(`notifications/${notificationId}`, 'DELETE')
        .then(() => dispatch(fetchNotifications()))
    }
)