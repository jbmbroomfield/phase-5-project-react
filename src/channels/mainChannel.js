import createSocket from './createSocket'

const mainChannel = (onUpdate) => {

    const params = {
        channel: 'MainChannel',
    }

    const messageFunctions = {
        'update': message => onUpdate()
    }

    return createSocket(params, messageFunctions)
    
}

export default mainChannel