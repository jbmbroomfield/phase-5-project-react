import React from 'react'

const FilterFlag = ({ symbol, handleClick, inclusion }) => {
    let className = 'btn filter-flag'
    if (inclusion === 'include') {
        className += ' filter-flag-include'
    } else if (inclusion === 'exclude') {
        className += ' filter-flag-exclude'
    }
    return(
        <div className={className} onClick={handleClick}>
            {symbol}
        </div>
    )
}

export default FilterFlag