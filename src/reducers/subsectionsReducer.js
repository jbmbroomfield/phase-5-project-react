const subsectionsReducer = (state = [], action) => {
    switch(action.type) {

        case 'ADD_SUBSECTIONS':
            return action.subsections.map(subsection => ({
                ...subsection,
                attributes: {
                    ...subsection.attributes,
                    section_id: subsection.attributes.section_id.toString(),
                }
            }))

        default:
            return state

    }

}

export default subsectionsReducer