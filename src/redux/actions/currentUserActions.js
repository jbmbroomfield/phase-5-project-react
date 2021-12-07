import API from "./API"
import { setJwt } from "jwt"
import { fetchData } from "./dataActions"

export const setCurrentUser = currentUser => ({
    type: 'SET_CURRENT_USER',
    currentUser
})

const removeCurrentUser = () => ({
    type: 'REMOVE_CURRENT_USER'
})

export const fetchCurrentUser = () => (
    dispatch => {
        API.get('current_user')
        .then(json => {
            let user
            if (json.jwt) {
                setJwt(json.jwt)
                user = json.user.data
            } else {
                user = json.data
            }
            user && dispatch(setCurrentUser(user))
        })
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

export const logout = () => (
    dispatch => {
        dispatch(removeCurrentUser())
        dispatch(fetchData())
    }
)

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
    return {user: {
        username: username,
        password_authentication_attributes: {
            password: password,
            password_confirmation: passwordConfirmation
        }, 
    }}
}

export const editProfile = attributes => {
    const body = {
        user: attributes
    }
    API.patch(`current_user`, body)
}

export const setGuestData = () => ({
    type: 'SET_GUEST_DATA'
})