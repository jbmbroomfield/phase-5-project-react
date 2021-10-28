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
        })
    }
)