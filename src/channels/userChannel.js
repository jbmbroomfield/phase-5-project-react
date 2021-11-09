import createSocket from './createSocket'

const userChannel = (userId, fetchNotifications) => {

    const params = {
        channel: "UserChannel",
        user_id: userId,
    }

    const messageFunctions = {
        notification_update: message => {
            fetchNotifications()
        }
    }

    const socket = createSocket(params, messageFunctions)
    
    return () => socket.close(1000)
}

export default userChannel