import React, { useState } from 'react'

import WhoCanView from '../components/WhoCanView'
import WhoCanPost from '../components/WhoCanPost'
import MenuItemContainer from './MenuItemContainer'

const WhoCanContainer = ({ viewOrPost, editTopic, topic }) => {

    const topicAttributes = topic ? topic.attributes : {}
    const whoCanView = topicAttributes.who_can_view
    const whoCanPost = topicAttributes.who_can_post
    const guestAccess = topicAttributes.guest_access

    const [password, setPassword] = useState(topicAttributes.password || '')
    const handlePasswordChange = event => setPassword(event.target.value)

    const editPassword = event => {
        const newPassword = event.target.value
        if (newPassword.length > 0) {
            editTopic({password: newPassword})
        }
    }

    const setWhoCan = whoCan => {
        const attr = `who_can_${viewOrPost.toLowerCase()}`
        editTopic({
            [attr]: whoCan,
        })
    }

    const setGuestAccess = guestAccess => editTopic({
        guest_access: guestAccess
    })
    console.log(guestAccess, whoCanView, whoCanPost)

    const heading = `Who Can ${viewOrPost}`
    const WhoCan = viewOrPost === 'View' ? WhoCanView : WhoCanPost
    const renderContent = () => <WhoCan
        whoCanView={whoCanView}
        whoCanPost={whoCanPost}
        setWhoCanView={setWhoCan}
        setWhoCanPost={setWhoCan}
        guestAccess={guestAccess}
        setGuestAccess={setGuestAccess}
        password={password} handlePasswordChange={handlePasswordChange}
        editPassword={editPassword}
    />
    
    return <MenuItemContainer
        heading={heading}
        renderContent={renderContent}
    />

}

export default WhoCanContainer