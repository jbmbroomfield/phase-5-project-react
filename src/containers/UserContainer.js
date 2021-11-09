import React from 'react'
import { connect } from 'react-redux'

const UserContainer = ({
    match,
    users,
    currentUser,
}) => {

    const userId = parseInt(match.params.userId)
    const user = users.find(user => parseInt(user.id) === userId )

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

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)