import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import SignupForm from '../components/SignupForm'

import { signup } from 'redux/actions/currentUserActions'

const SignupContainer = () => {

	const dispatch = useDispatch()
    
    const currentUser = useSelector(state => state.currentUser)
    const loggedIn = currentUser && currentUser.attributes.account_level !== 'guest'

    const history = useHistory()

    useEffect(() => {
        if (loggedIn) {
            history.push('/')
        }
    }, [loggedIn, history])

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