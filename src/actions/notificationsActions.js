import API from './API'

const addNotifications = notifications => ({
    type: 'ADD_NOTIFICATIONS',
    notifications
})

export const fetchNotifications = () => (
    dispatch => {
        API.get('notifications')
        .then(json => {
            json.data && dispatch(addNotifications(json.data))
        })
    }
)

export const deleteNotification = notificationId => (
    dispatch => {
        API.delete(`notifications/${notificationId}`)
        .then(() => dispatch(fetchNotifications()))
    }
)