import createSocket from './createSocket'

const userChannel = (userId, fetchNotifications) => {

    const params = {
        channel: 'UserChannel',
        user_id: userId,
    }

    const messageFunctions = {
        notification_update: message => {
            fetchNotifications()
        }
    }

    return createSocket(params, messageFunctions)
}

export default userChannel