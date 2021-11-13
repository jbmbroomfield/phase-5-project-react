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
                json.data && dispatch(setCurrentUser(json.data))
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
                redirect(json.jwt)
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

export const uploadAvatar = (avatarImage, jwt) => (
    dispatch => {
        const body = {avatar_image: avatarImage}
        API.postForm('upload_avatar', body)
    }
)

export const signup = (
    username,
    password, passwordConfirmation,
    avatarImage,
    redirect
) => (
    dispatch => {
        API.post('users', signupBody(
            username,
            password, passwordConfirmation,
        ))
        .then(json => {
            const uploadAvatarAndRedirect = jwt => {
                uploadAvatar(avatarImage, jwt)
            }
            dispatch(login(username, password, uploadAvatarAndRedirect))
        })
    }
)

const signupBody = (
    username,
    password, passwordConfirmation,
) => {
    const rv = {user: {
        username: username,
        password_authentication_attributes: {
            password: password,
            password_confirmation: passwordConfirmation
        }, 
    }}
    console.log(rv)
    return rv
}

export const editProfile = attributes => {
    const body = {
        user: attributes
    }
    API.patch(`current_user`, body)
}