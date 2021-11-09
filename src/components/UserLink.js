import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const UserLink = ({ users, userId, username }) => {

    if (!username) {
        const user = users.find(user => parseInt(userId) === parseInt(user.id))
        if (!user) {
            return null
        }
        username = user.attributes.username
    }

    return (
        <Link to={`/users/${userId}`}>
            {username}
        </Link>
    )
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps)(UserLink)