import React from 'react'

const MenuPill = ({
    value, highlighted, onClick,
}) => {

    let className = 'filter-user'
    if (!highlighted) className += ' filter-user-exclude'
    if (onClick) className += ' btn'
    
    return <div
        className={className}
        onClick={onClick}
    >
        {value}
    </div>
}

export default MenuPill