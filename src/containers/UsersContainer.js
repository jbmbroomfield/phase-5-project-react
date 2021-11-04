import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions/usersActions'

import User from '../components/User'

const UsersContainer = ({ users, fetchUsers }) => {

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    const renderUsers = () => (
        users.map(user => <User key={user.id} username={user.attributes.username} />)
    )
    console.log(users)
    return (
        <div>
            { renderUsers() }
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)