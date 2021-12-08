import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import TimezoneSelect from 'react-timezone-select'

import { editProfile } from 'redux/actions/currentUserActions'

const DisplayAvatar = ({ src }) => (
    <><img className='avatar' src={src} alt="avatar" /><br /></>
)

const EditProfileForm = ({ uploadAvatar, currentUser, currentTimeZone }) => {

    const [state, setState] = useState({
        timezone: null,
        avatarImage: null,
        avatarFile: null,
    })

    const history = useHistory()

    const handleTimezoneChange = timezone => {
        setState({
            ...state,
            timezone: timezone.value
        })
    }

    const handleImageChange = event => {
        setState({
            ...state,
            avatarImage: event.target.files[0],
            avatarFile: URL.createObjectURL(event.target.files[0])
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        const attributes = {
            avatar_image: state.avatarImage,
            time_zone: state.timezone
        }
        editProfile(attributes)
        uploadAvatar(state.avatarImage)
        history.push("/")
    }

    const renderAvatar = () => {
        const src = state.avatarFile || (
            currentUser && currentUser.attributes && currentUser.attributes.get_avatar_image
        )
        if (src) {
            return <DisplayAvatar src={src} />
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Avatar:<br />
                { renderAvatar() }
                <input
                    type="file"
                    accept="image/*"
                    multiple={false}
                    onChange={handleImageChange}
                /><br />
                Time zone:<br />
                <TimezoneSelect
                    name="timezone"
                    value={state.timezone || currentTimeZone || "" }
                    onChange={handleTimezoneChange}
                /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default EditProfileForm