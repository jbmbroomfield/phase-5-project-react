import createSocket from './createSocket'

const topicChannel = (subsectionSlug, topicSlug, fetchPost, fetchTopic) => {

    const params = {
        channel: 'TopicChannel',
        subsection_slug: subsectionSlug,
        topic_slug: topicSlug,
    }

    const messageFunctions = {
        post_update: message => {
            fetchPost(message.post_id)
        },
        topic_update: message => {
            fetchTopic(subsectionSlug, topicSlug)
        },
    }

    return createSocket(params, messageFunctions)
    
}

export default topicChannel