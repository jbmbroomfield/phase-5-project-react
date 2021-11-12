import React from 'react'

import FilterUser from './FilterUser'
import FilterFlag from './FilterFlag'

const Filter = ({
    users,
    userFilter, flagFilter,
    toggleUserFilter, toggleFlagFilter,
    includeAllUsers, excludeAllUsers,
}) => {

    let includedUsers

    const flags = [
        ['like', <i className="fa fa-thumbs-up fa-thumbs-up-liked"></i>],
        ['nonlike', <><i className="fa fa-thumbs-up"></i><i className="fa fa-thumbs-down"></i></>],
        ['dislike', <i className="fa fa-thumbs-down fa-thumbs-down-disliked"></i>],
    ]

    const renderFlags = () => {
        return flags.map(([flag, symbol]) => {
            let inclusion = null
            if (flagFilter.include.includes(flag)) {
                inclusion = 'include'
            } else if (flagFilter.exclude.includes(flag)) {
                inclusion = 'exclude'
            }
            return (
                <FilterFlag
                    key={flag}
                    // flag={flag}
                    symbol={symbol}
                    handleClick={() => toggleFlagFilter(flag)}
                    inclusion={inclusion}
                />
            )
        })
    }

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
            <div className="filter-flags">
                { renderFlags() }
            </div>
        </div>
    )
}

export default Filter