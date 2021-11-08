import React from 'react'

import FilterUser from './FilterUser'

const Filter = ({
    users,
    userFilter,
    includeUser, excludeUser
}) => {

    const userExclude = userFilter.exclude || []

    const handleChange = event => {
        console.log(event.target)
        console.log(event.target.name)
        if (userExclude.includes(event.target.name)) {
            includeUser(event.target.name)
        } else {
            excludeUser(event.target.name)
        }
    }

    return (
        <div>
            { users?.map(user => {
                const exclude = userExclude.includes(user)
                return (
                    <FilterUser
                        key={user}
                        user={user}
                        exclude={exclude}
                        handleChange={handleChange}
                    />
                )
            })}
        </div>
    )
}

export default Filter