import api from "../api"

const startSettingCurrentUser = () => ({
    type: 'START_SETTING_CURRENT_USER'
})

export const setCurrentUser = currentUser => ({
    type: 'SET_CURRENT_USER',
    currentUser
})

export const removeCurrentUser = () => ({
    type: 'REMOVE_CURRENT_USER'
})

export const fetchCurrentUser = dispatch => (
    dispatch => {
        const jwt = localStorage.getItem('jwt')
        if (jwt) {
            dispatch(startSettingCurrentUser())
            api('current_user', jwt)
            .then(json => {
                dispatch(setCurrentUser(json.data.attributes))
            })
        } else {
            dispatch(removeCurrentUser())
        }
    }
)