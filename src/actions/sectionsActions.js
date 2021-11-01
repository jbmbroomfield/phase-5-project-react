import API from "./API";

const addSections = sections => ({
    type: 'ADD_SECTIONS',
    sections,
})

export const fetchSections = () => (
    dispatch => {
        API.get('sections')
        .then(json => {
            dispatch(addSections(json.data))
        })
    }
)