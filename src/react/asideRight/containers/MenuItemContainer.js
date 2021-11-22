import React, { useState } from 'react'

import MenuItem from '../components/MenuItem'

const MenuItemContainer = ({
    heading, renderContent,
}) => {

    const [display, setDisplay] = useState(false)
    const toggleDisplay = () => setDisplay(!display)
    
    return <MenuItem
        heading={heading}
        renderContent={renderContent}
        display={display}
        toggleDisplay={toggleDisplay}
    />
}

export default MenuItemContainer