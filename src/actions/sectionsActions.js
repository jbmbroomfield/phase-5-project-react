import api from "../api";

const addSections = sections => ({
    type: 'ADD_SECTIONS',
    sections,
})

export const fetchSections = () => (
    dispatch => {
        api('sections')
        .then(json => {
            dispatch(addSections(json.data))
            for (const section of json.data) {
                dispatch(fetchSubsections(section.id))
            }
        })
    }
)

const addSubsectionsToSection = (sectionId, subsections) => ({
    type: 'ADD_SUBSECTIONS_TO_SECTION',
    sectionId,
    subsections,
})

export const fetchSubsections = sectionId => (
    dispatch => {
        api(`sections/${sectionId}/subsections`)
        .then(json => {
            dispatch(addSubsectionsToSection(sectionId, json.data))
        })
    }
)