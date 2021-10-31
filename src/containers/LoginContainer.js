import React from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { setCurrentUser } from '../actions/currentUserActions'

import { useHistory } from 'react-router'

const LoginContainer = ({ currentUser, setCurrentUser }) => {

    const history = useHistory()

    if (currentUser.attributes) {
        history.push("/")
        return <div></div>
    }

    return (
        <div>
            <div className="page">
                <h1>Login</h1>
                <LoginForm setCurrentUser={setCurrentUser} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = ({
    setCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)