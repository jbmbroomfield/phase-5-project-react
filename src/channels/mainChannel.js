import createSocket from '../createSocket'

const mainChannel = (onUpdate) => {

    const params = {
        channel: "MainChannel",
    }

    const messageFunctions = {
        'update': message => onUpdate()
    }

    const socket = createSocket(params, messageFunctions)
    
    return () => socket.close(1000)
}

export default mainChannel