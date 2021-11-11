import React from 'react'
// import { useHistory } from 'react-router'
import { connect } from 'react-redux'

import EditProfileForm from '../components/EditProfileForm'

import { uploadAvatar } from '../actions/currentUserActions'

const EditProfileContainer = ({ currentUser, uploadAvatar }) => {
    
    return (
        <div>
            <div className="page">
                <h1>Edit Profile</h1>
                <EditProfileForm
                    uploadAvatar={uploadAvatar}
                    currentUser={currentUser}
                    currentTimeZone={currentUser && currentUser.attributes && currentUser.attributes.time_zone}
                />
            </div>
        </div>
    )   

}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = {
    uploadAvatar,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer)