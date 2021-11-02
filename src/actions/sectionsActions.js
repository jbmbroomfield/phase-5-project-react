import API from "./API";

const addSections = sections => ({
    type: 'ADD_SECTIONS',
    sections,
})

export const fetchSections = () => (
    dispatch => {
        API.get('sections')
        .then(json => {
            json.data && dispatch(addSections(json.data))
        })
    }
)