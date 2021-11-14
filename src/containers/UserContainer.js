import React from 'react'
import { connect } from 'react-redux'

const UserContainer = ({
    match,
    users,
    currentUser,
}) => {

    const userSlug = match.params.userSlug
    const user = users.find(user => user.attributes.slug === userSlug)

    if (!user) {
        return null
    }

    return (
        <div>
            <h1>{user.attributes.username}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.users,
    currentUser: state.currentUsers,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)