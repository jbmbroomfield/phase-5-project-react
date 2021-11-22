import React from 'react'
import AddUserContainer from '../containers/AddUserContainer'

const TopicUsers = ({ userType, users, handleAdd }) => {

    const renderUsers = () => (
        users.map(user => <div key={user.id} className="filter-user filter-user-exclude">{user.attributes.username}</div>)
    )

    return <div>
        <AddUserContainer exclude={users} placeholder={`Add ${userType}`} handleAdd={handleAdd} />
        <div className="filter-users">
            { users && renderUsers() }
        </div>
    </div>
}

export default TopicUsers