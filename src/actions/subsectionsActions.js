import API from './API'

const addSubsections = subsections => ({
    type: 'ADD_SUBSECTIONS',
    subsections
})

export const fetchSubsections = () => (
    dispatch => {
        API.get('subsections')
        .then(json => {
            json.data && dispatch(addSubsections(json.data))
        })
    }
)

export const fetchSubsection = subsectionId => (
    dispatch => {
        API.get(`subsections/${subsectionId}`)
        .then(json => {
            json.data && dispatch(addSubsections([json.data]))
        })
    }
)