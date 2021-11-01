import API from "./API"
import { setJwt } from "../jwt"

export const setCurrentUser = currentUser => ({
    type: 'SET_CURRENT_USER',
    currentUser
})

export const removeCurrentUser = () => ({
    type: 'REMOVE_CURRENT_USER'
})

export const fetchCurrentUser = () => (
    dispatch => {
        const jwt = localStorage.getItem('jwt')
        if (jwt) {
            API.get('current_user')
            .then(json => {
                dispatch(setCurrentUser(json.data))
            })
        } else {
            dispatch(removeCurrentUser())
        }
    }
)

export const login = (username, password, redirect) => (
    dispatch => {
        API.post('login', loginBody(username, password))
        .then(json => {
            if (json.jwt) {
                setJwt(json.jwt)
                dispatch(setCurrentUser(json.user.data))
                redirect()
            }
        })
    }
)

const loginBody = (username, password) => ({
    user: {
        username: username,
        password_authentication_attributes: {
            password: password
        }
    }
})