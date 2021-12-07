import React , { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import LoginForm from '../components/LoginForm'

import { login } from 'redux/actions/currentUserActions'


const LoginContainer = () => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.currentUser)
    const loggedIn = currentUser && currentUser.attributes.account_level !== 'guest'

    const history = useHistory()

    useEffect(() => {
        if (loggedIn) {
            history.push('/')
        }
    }, [loggedIn, history])

    if (loggedIn) {
        // history.push("/")
        return null
    }

    const renderLoginContainer = () => (
        <div>
            <div className="page">
                <h1>Login</h1>
                <LoginForm login={(username, password, redirect) => dispatch(login(username, password, redirect))} />
            </div>
        </div>
    )

    return renderLoginContainer()
}

export default LoginContainer