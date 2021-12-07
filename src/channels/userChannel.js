import createSocket from './createSocket'

const userChannel = (userSlug, fetchNotifications, fetchCurrentUser) => {

    const params = {
        channel: 'UserChannel',
        user_slug: userSlug,
    }

    const messageFunctions = {
        notification_update: message => {
            fetchNotifications()
        },
        user_update: message => {
            fetchCurrentUser()
        },
    }

    return createSocket(params, messageFunctions)
}

export default userChannel