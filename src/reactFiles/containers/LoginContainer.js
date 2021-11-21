import React , { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import LoginForm from '../components/LoginForm'

import { login } from '../../actions/currentUserActions'


const LoginContainer = () => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.currentUser)

    const history = useHistory()

    useEffect(() => {
        if (currentUser) {
            history.push('/')
        }
    }, [currentUser, history])

    if (currentUser) {
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