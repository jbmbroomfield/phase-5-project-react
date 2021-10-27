const sectionsReducer = (state = [], action) => {
    switch(action.type) {
        
        case 'ADD_SECTIONS':
            return action.sections
        
        case 'ADD_SUBSECTIONS_TO_SECTION':
            return state.map(section => {
                if (section.id !== action.sectionId) {
                    return section
                }
                return {
                    ...section,
                    subsections: action.subsections
                }
            })
        
        default:
            return state

    }
}

export default sectionsReducer