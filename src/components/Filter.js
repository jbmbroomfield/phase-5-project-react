import React from 'react'

import FilterUser from './FilterUser'

const Filter = ({
    users,
    userFilter,
    toggleUserFilter, includeAllUsers, excludeAllUsers,
}) => {

    let includedUsers

    if (userFilter.exclude) {
        includedUsers = users?.filter(user => !userFilter.exclude.includes(user))
    } else {
        includedUsers = userFilter.include
    }

    return (
        <div>
            <div className='filter-users'>
                <div
                    className={`btn filter-user${userFilter.include ? ' filter-user-exclude' : ''}`}
                    onClick={includeAllUsers}
                >
                    All
                </div>
                <div
                    className={`btn filter-user${userFilter.exclude ? ' filter-user-exclude' : ''}`}
                    onClick={excludeAllUsers}
                >
                    None
                </div>
                { users?.map(user => {
                    const include = includedUsers.includes(user)
                    return (
                        <FilterUser
                            key={user}
                            user={user}
                            include={include}
                            handleClick={() => toggleUserFilter(user)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Filter