import React from 'react'
import { useSelector } from 'react-redux'
import FA from 'react/sharedComponents/FA'
import { editProfile } from 'redux/actions/currentUserActions'
import MenuPill from '../components/MenuPill'
import MenuItemContainer from './MenuItemContainer'

const AsideRightDefaultContainer = () => {

    
    const currentUser = useSelector(state => state.currentUser)
    if (!currentUser || !currentUser.attributes) {
        return null
    }
    const currentUserAttributes = currentUser.attributes
    const showIgnored = currentUserAttributes.show_ignored
    const cross = <FA icon="times" color="#555" />


    const renderIgnored = () => {
        const heading = showIgnored ? 'Showing ignored threads' : <>Hiding ignored threads {cross}</>
        const value = showIgnored ? <>Hide ignored threads {cross}</> : 'Show ignored threads'
        const handleClick = () => editProfile({show_ignored: !showIgnored})
        const button = <MenuPill value={value} onClick={handleClick} />
        const renderContent = () => <>
            {button}
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