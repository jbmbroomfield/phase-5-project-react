import React from 'react'
import FA from 'react/sharedComponents/FA'
import MenuPill from '../components/MenuPill'
import MenuItemContainer from './MenuItemContainer'

const SubscribeContainer = ({
    status,
    updateStatus,
}) => {

    const tick = <FA icon="check" color="green" />
    const cross = <FA icon="times" color="#555" />

    const heading = {
        subscribed: <>Subscribed {tick}</>,
        unsubscribed: <>Not Subscribed</>,
        ignored: <>Ignored {cross}</>,
    }[status]

    const button = newStatus => {
        const value = {
            subscribed: <>Subscribe {tick}</>,
            unsubscribed: status === 'subscribed' ? <>Unsubscribe</> : <>Unignore</>,
            ignored: <>Ignore {cross}</>
        }[newStatus]
        return <MenuPill value={value} onClick={() => updateStatus(newStatus)} />
    }

    const renderContent = () => ({
        subscribed: <>{button('unsubscribed')} {button('ignored')}</>,
        unsubscribed: <>{button('subscribed')} {button('ignored')}</>,
        ignored: <>{button('subscribed')} {button('unsubscribed')}</>,
    }[status])

    return <MenuItemContainer
        heading={heading}
        renderContent={renderContent}
    />
}

export default SubscribeContainer