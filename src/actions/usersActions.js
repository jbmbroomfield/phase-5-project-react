import API from "./API";

const addUsers = users => ({
    type: 'ADD_USERS',
    users
})

export const fetchUsers = () => (
    dispatch => {
        API.get('users')
        .then(json => {
            json.data && dispatch(addUsers(json.data))
        })
    }
)