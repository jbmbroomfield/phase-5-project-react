import React from 'react'

import WhoCanView from '../components/WhoCanView'
import WhoCanPost from '../components/WhoCanPost'
import MenuItemContainer from './MenuItemContainer'

const WhoCanContainer = ({ viewOrPost, whoCanView, whoCanPost, editTopic }) => {

    const setWhoCan = whoCan => {
        const attr = `who_can_${viewOrPost.toLowerCase()}`
        editTopic({
            [attr]: whoCan,
        })
    }

    const heading = `Who Can ${viewOrPost}`
    const WhoCan = viewOrPost === 'View' ? WhoCanView : WhoCanPost
    const renderContent = () => <WhoCan
        whoCanView={whoCanView}
        whoCanPost={whoCanPost}
        setWhoCanView={setWhoCan}
        setWhoCanPost={setWhoCan}
    />
    
    return <MenuItemContainer
        heading={heading}
        renderContent={renderContent}
    />

}

export default WhoCanContainer