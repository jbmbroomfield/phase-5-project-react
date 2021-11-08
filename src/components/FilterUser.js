import React from 'react'

const FilterUser = ({
    user, exclude, handleChange
}) => {
    return (
        <p>
            <input
                name={user}
                type="checkbox"
                checked={!exclude}
                onChange={handleChange}
            />
            {user}
        </p>
    )
}

export default FilterUser