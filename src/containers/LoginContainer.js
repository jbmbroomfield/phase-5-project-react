import React from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'

import { login } from '../actions/currentUserActions'

import { useHistory } from 'react-router'

const LoginContainer = ({ currentUser, login }) => {

    const history = useHistory()

    if (currentUser.attributes) {
        history.push("/")
        return <div></div>
    }

    return (
        <div>
            <div className="page">
                <h1>Login</h1>
                <LoginForm login={login} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    login: (username, password, redirect) => dispatch(login(username, password, redirect))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)