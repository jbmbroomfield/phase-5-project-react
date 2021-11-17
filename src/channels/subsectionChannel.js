import createSocket from './createSocket'

const subsectionChannel = (subsectionSlug, fetchTopic, fetchSubsection) => {

    const params = {
        channel: 'SubsectionChannel',
        subsection_slug: subsectionSlug,
    }

    const messageFunctions = {
        topic_update: message => {
            fetchTopic(subsectionSlug, message.topic_slug)
        },
        subsection_update: message => {
            fetchSubsection(subsectionSlug)
        },
    }

    return createSocket(params, messageFunctions)
}

export default subsectionChannel