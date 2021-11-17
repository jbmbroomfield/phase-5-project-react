import { fetchTopic } from '../actions/topicsActions'
import createSocket from './createSocket'

const topicChannel = (topicId, fetchPost) => {

    const params = {
        channel: 'TopicChannel',
        topic_id: topicId,
    }

    const messageFunctions = {
        post_update: message => {
            fetchPost(message.post_id)
        },
        topic_update: message => {
            fetchTopic(message.topic_id)
        },
    }

    return createSocket(params, messageFunctions)
    
}

export default topicChannel