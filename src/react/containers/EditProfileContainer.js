import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import EditProfileForm from '../components/EditProfileForm'

import { uploadAvatar } from 'redux/actions/currentUserActions'

const EditProfileContainer = () => {

	const dispatch = useDispatch()
    
    const currentUser = useSelector(state => state.currentUser)

    return (
        <div>
            <div className="page">
                <h1>Edit Profile</h1>
                <EditProfileForm
                    uploadAvatar={() => dispatch(uploadAvatar())}
                    currentUser={currentUser}
                    currentTimeZone={currentUser && currentUser.attributes && currentUser.attributes.time_zone}
                />
            </div>
        </div>
    )   

}

export default EditProfileContainer