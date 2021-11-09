import createSocket from '../createSocket'

const topicChannel = (topicId, fetchPost) => {

    const params = {
        channel: "TopicChannel",
        topic_id: topicId,
    }

    const messageFunctions = {
        post_update: message => {
            console.log('received', message)
            fetchPost(message.post_id)
        }
    }

    const socket = createSocket(params, messageFunctions)
    
    return () => socket.close(1000)
}

export default topicChannel