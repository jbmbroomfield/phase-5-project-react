import API from './API'

const addSubsections = subsections => ({
    type: 'ADD_SUBSECTIONS',
    subsections
})

export const fetchSubsections = () => (
    dispatch => {
        API.get('subsections')
        .then(json => {
            const subsections = json.data
            if (!subsections) {
                return
            }
            dispatch(addSubsections(json.data))
            for (const subsection of subsections) {
                dispatch(fetchSubsection(subsection.attributes.slug))
            }
        })
    }
)

export const fetchSubsection = subsectionSlug => (
    dispatch => {
        API.get(`forum/${subsectionSlug}`)
        .then(json => {
            json.data && dispatch(addSubsections([json.data]))
        })
    }
)