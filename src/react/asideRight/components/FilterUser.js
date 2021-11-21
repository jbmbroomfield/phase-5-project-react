import React from 'react'

const FilterUser = ({
    username, include, handleClick
}) => {
    return (
        <div
            className={`btn filter-user${!include ? ' filter-user-exclude' : ''}`}
            name={username}
            onClick={handleClick}
        >
            {username}
        </div>
    )
}

export default FilterUser