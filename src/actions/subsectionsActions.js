import api from './api'

const addSubsections = subsections => ({
    type: 'ADD_SUBSECTIONS',
    subsections
})

export const fetchSubsections = () => (
    dispatch => {
        api('subsections')
        .then(json => {
            dispatch(addSubsections(json.data))
        })
    }
)