import React from 'react'

const FilterUser = ({
    user, include, handleClick
}) => {
    return (
        <div
            className={`btn filter-user${!include ? ' filter-user-exclude' : ''}`}
            name={user}
            onClick={handleClick}
        >
            {user}
        </div>
    )
}

export default FilterUser