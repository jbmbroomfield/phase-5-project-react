import React from 'react'
import FA from 'react/sharedComponents/FA'
import MenuPill from '../components/MenuPill'
import MenuItemContainer from './MenuItemContainer'

const SubscribeContainer = ({
    subscribed,
    handleSubscribe, handleUnsubscribe
}) => {
    
    const tick = <FA icon="check" color="green" />

    const heading = subscribed ? <>Subscribed {tick}</> : 'Not Subscribed'
    
    const value = subscribed ? 'Unsubscribe' : <>Subscribe {tick}</>

    const handleClick = () => subscribed ? handleUnsubscribe() : handleSubscribe()

    const renderContent = () => <MenuPill value={value} onClick={handleClick}>
        
    </MenuPill>

    return <MenuItemContainer
        heading={heading}
        renderContent={renderContent}
    />
}

export default SubscribeContainer