import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import SignupForm from '../components/SignupForm'

import { signup } from '../actions/currentUserActions'

const SignupContainer = () => {

	const dispatch = useDispatch()
    
    const currentUser = useSelector(state => state.currentUser)

    const history = useHistory()

    if (currentUser && currentUser.attributes) {
        history.push("/")
        return null
    }

    const renderSignupContainer = () => (
        <div>
            <div className="page">
                <h1>Sign Up</h1>
                <SignupForm signup={(...args) => dispatch(signup(...args))} />
            </div>
        </div>
    )

    return renderSignupContainer()
}

export default SignupContainer