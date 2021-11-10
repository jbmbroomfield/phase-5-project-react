import createSocket from './createSocket'

const subsectionChannel = (subsectionId, fetchTopic) => {

    const params = {
        channel: 'SubsectionChannel',
        subsection_id: subsectionId,
    }

    const messageFunctions = {
        topic_update: message => {
            fetchTopic(message.topic_id)
        }
    }

    const socket = createSocket(params, messageFunctions)

    return () => socket.close(1000)
}

export default subsectionChannel