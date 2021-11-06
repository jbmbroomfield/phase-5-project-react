import React from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'

import EditProfileForm from '../components/EditProfileForm'

import { uploadAvatar } from '../actions/currentUserActions'

const EditProfileContainer = ({ currentUser, uploadAvatar }) => {

    const history = useHistory()

    // if (!(currentUser && currentUser.attributes)) {
    //     history.push("/")
    //     return null
    // }
    
    return (
        <div>
            <div className="page">
                <h1>Edit Profile</h1>
                <EditProfileForm uploadAvatar={uploadAvatar} />
            </div>
        </div>
    )   

}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    uploadAvatar: (avatarImage, jwt) => dispatch(uploadAvatar(avatarImage, jwt))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer)