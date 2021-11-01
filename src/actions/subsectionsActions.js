import API from './API'

const addSubsections = subsections => ({
    type: 'ADD_SUBSECTIONS',
    subsections
})

export const fetchSubsections = () => (
    dispatch => {
        API.get('subsections')
        .then(json => {
            dispatch(addSubsections(json.data))
        })
    }
)