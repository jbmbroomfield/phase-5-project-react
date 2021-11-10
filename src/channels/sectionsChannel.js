import createSocket from './createSocket'

const sectionsChannel = fetchSubsection => {

    const params = {
        channel: 'SectionsChannel',
    }

    const messageFunctions = {
        subsection_update: message => {
            fetchSubsection(message.subsection_id)
        }
    }

    return createSocket(params, messageFunctions)

}

export default sectionsChannel