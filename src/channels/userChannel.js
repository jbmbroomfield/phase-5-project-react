import createSocket from './createSocket'

const userChannel = (userSlug, fetchNotifications) => {

    const params = {
        channel: 'UserChannel',
        user_slug: userSlug,
    }

    const messageFunctions = {
        notification_update: message => {
            fetchNotifications()
        }
    }

    return createSocket(params, messageFunctions)
}

export default userChannel