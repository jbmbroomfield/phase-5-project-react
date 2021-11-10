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

    const socket = createSocket(params, messageFunctions)

    return () => socket.close(1000)

}

export default sectionsChannel