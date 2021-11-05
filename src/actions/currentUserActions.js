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
        const formData = new FormData()
        formData.append('avatar_image', avatarImage)
        fetch('http://localhost:3000/api/v1/upload_avatar', {
            method: 'POST',
            headers: {'Authorization': `Bearer ${jwt}`},
            body: formData
        })
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
            // avatarImage,
        ))
        .then(json => {
            const uploadAvatarAndRedirect = jwt => {
                uploadAvatar(avatarImage, jwt)
            }
            dispatch(login(username, password, uploadAvatarAndRedirect))
        })
        // fetch(
        //     'http://localhost:3000/api/v1/users', {
        //         method: 'POST',
        //         body: signupBody(
        //     username,
        //     password, passwordConfirmation,
        //     avatarImage,
        // )})
        // .then(response => response.json())
        // .then(json => {
        //     console.log(json)
        //     login(username, password, redirect)
        // })
    }
)

const signupBody = (
    username,
    password, passwordConfirmation,
    // avatarImage,
) => {
    console.log(password, passwordConfirmation)
    // const userData = new FormData()
    // userData.append('username', username)
    // userData.append('password_authentication_attributes', { 
    //         password: password,
    //         password_confirmation: passwordConfirmation
    // })
    // userData.append('avatar_image', avatarImage)
    // console.log('returning', {user: userData})
    // console.log(userData)
    // const body = {user: userData}
    // const body = new FormData()
    // body.append('user', userData)
    // console.log(body)
    // return body
    const rv = {user: {
        username: username,
        password_authentication_attributes: {
            password: password,
            password_confirmation: passwordConfirmation
        }, 
        // avatar_image: avatarImage,
    }}
    console.log(rv)
    return rv
}