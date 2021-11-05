import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { getJwt } from "../jwt"

const EditProfileForm = ({ uploadAvatar }) => {

    const [state, setState] = useState({
        avatarImage: null,
    })

    const history = useHistory()

    // const handleChange = event => {
    //     setState({
    //         ...state,
    //         [event.target.name]: event.target.value
    //     })
    // }

    const handleImageChange = event => {
        setState({
            ...state,
            avatarImage: event.target.files[0]
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        uploadAvatar(state.avatarImage, getJwt())
        history.push("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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

export default EditProfileForm