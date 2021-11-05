import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SignupForm = ({ signup }) => {

    const [state, setState] = useState({
        username: '',
        password: '',
        passwordConfirmation: '',
        avatarImage: null,
    })

    const history = useHistory()

    const handleChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleImageChange = event => {
        setState({
            ...state,
            avatarImage: event.target.files[0]
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        const redirect = () => history.push("/")
        signup(
            state.username,
            state.password, state.passwordConfirmation,
            state.avatarImage,
            redirect
        )

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Username:<br />
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                /><br />
                Password:<br />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                /><br />
                Password Confirmation:<br />
                <input
                    type="password"
                    name="passwordConfirmation"
                    value={state.passwordConfirmation}
                    onChange={handleChange}
                /><br />
                <input
                    type="file"
                    accept="image/*"
                    multiple={false}
                    onChange={handleImageChange}
                /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignupForm