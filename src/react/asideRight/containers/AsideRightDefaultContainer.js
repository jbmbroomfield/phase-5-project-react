import React from 'react'
import { useSelector } from 'react-redux'
import MenuItemContainer from './MenuItemContainer'

const AsideRightDefaultContainer = () => {
    
    const currentUser = useSelector(state => state.currentUser)
    if (!currentUser || !currentUser.attributes) {
        return null
    }
    const currentUserAttributes = currentUser.attributes
    const showIgnored = currentUserAttributes.show_ignored


    const renderIgnored = () => {
        const heading = showIgnored ? 'Not Ignoring' : 'Ignoring'
        const renderContent = () => <>
            Hi
        </>
        return <MenuItemContainer
            heading={heading}
            renderContent={renderContent}
        />
    }

    return <>
        { renderIgnored() }
    </>
}

export default AsideRightDefaultContainer