import React from 'react'

import FilterFlag from './FilterFlag'

import MenuPill from './MenuPill'

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
                <MenuPill
                    value="All"
                    highlighted={!userFilter.include}
                    onClick={includeAllUsers}
                />
                <MenuPill
                    value="None"
                    highlighted={!userFilter.exclude}
                    onClick={excludeAllUsers}
                />
                { users?.map(user => <MenuPill
                    value={user.attributes.username}
                    highlighted={includedUsers.includes(user)}
                    onClick={() => toggleUserFilter(user)}
                />) }
            </div>
            <div className="filter-flags">
                { renderFlags() }
            </div>
        </div>
    )
}

export default Filter