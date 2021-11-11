import React from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'

import SignupForm from '../components/SignupForm'

import { signup } from '../actions/currentUserActions'

const SignupContainer = ({ currentUser, signup }) => {

    const history = useHistory()

    if (currentUser && currentUser.attributes) {
        history.push("/")
        return null
    }

    const renderSignupContainer = () => (
        <div>
            <div className="page">
                <h1>Sign Up</h1>
                <SignupForm signup={signup} />
            </div>
        </div>
    )

    return renderSignupContainer()
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = {
    signup,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)