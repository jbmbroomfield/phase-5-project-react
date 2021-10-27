import api from "../api";

const addUsers = users => ({
    type: 'ADD_USERS',
    users
})

export const fetchUsers = dispatch => (
    dispatch => {
        api('users')
        .then(json => {
            dispatch(addUsers(json.data))
        })
    }
)