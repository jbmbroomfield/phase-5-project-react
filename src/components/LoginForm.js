import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../actions/api'

const LoginForm = ({ setCurrentUser }) => {

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const history = useHistory()

    const handleChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        api('login', request_body())
        .then(json => {
            if (json.jwt) {
                localStorage.setItem('jwt', json.jwt)
                setCurrentUser(json.user.data.attributes)
                history.push("/")
            }
        })
    }

    const request_body = () => ({
        user: {
            username: state.username,
            password_authentication_attributes: {
                password: state.password
            }
        }
    })

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
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginForm