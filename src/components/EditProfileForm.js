import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import TimezoneSelect from 'react-timezone-select'

import { getJwt } from "../jwt"

const EditProfileForm = ({ uploadAvatar }) => {

    // const convertTZ = (date, tzString) => {
    //     date = typeof date === "string" ? new Date(date) : date
    //     return new Date(date.toLocaleString("en-US", {timeZone: tzString}));   
    // }

    const [state, setState] = useState({
        timezone: {},
        avatarImage: null,
    })

    const history = useHistory()

    const handleChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleTimezoneChange = timezone => {
        console.log(timezone)
        setState({
            ...state,
            timezone: timezone.value
        })
    }

    const handleImageChange = event => {
        console.log(event)
        console.log(typeof event)
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
                <TimezoneSelect
                    name="timezone"
                    value={state.timezone}
                    onChange={handleTimezoneChange}
                /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default EditProfileForm