import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AsideRightDefaultContainer from './AsideRightDefaultContainer'
// import AsideRightSubsectionContainer from './AsideRightSubsectionContainer'
import AsideRightTopicContainer from './AsideRightTopicContainer'

const AsideRightContainer = () => {

    const topicRoute = () => <Route
        exact path="/forum/:subsectionSlug/:topicSlug"
        render={routerProps => <AsideRightTopicContainer {...routerProps}/> }
    />

    // const subsectionRoute = () => <Route
    //     exact path="/forum/:subsectionSlug"
    //     render={routerProps => <AsideRightSubsectionContainer {...routerProps} />}
    // />

    const defaultRoute = () => <Route
        // exact path=""
        render={routerProps => <AsideRightDefaultContainer {...routerProps} />}
    />

    const renderSwitch = () => (
        <Switch>
            { topicRoute() }
            {/* { subsectionRoute() } */}
            { defaultRoute() }
        </Switch>
    )

    return (
        <aside className="aside-right">
            { renderSwitch() }
        </aside>
    )
}

export default AsideRightContainer