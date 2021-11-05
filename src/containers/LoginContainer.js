import React from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'

import { login } from '../actions/currentUserActions'


const LoginContainer = ({ currentUser, login }) => {

    const history = useHistory()

    if (currentUser && currentUser.attributes) {
        history.push("/")
        return null
    }

    const renderLoginContainer = () => (
        <div>
            <div className="page">
                <h1>Login</h1>
                <LoginForm login={login} />
            </div>
        </div>
    )

    return renderLoginContainer()
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    login: (username, password, redirect) => dispatch(login(username, password, redirect))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)