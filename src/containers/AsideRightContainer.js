import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AsideRightTopicContainer from './AsideRightTopicContainer'

const AsideRightContainer = () => {

    const topicRoute = () => (
        <Route
            exact path="/forum/:subsectionSlug/:topicSlug"
            render={routerProps => <AsideRightTopicContainer {...routerProps}/>}
        />
    )

    const renderSwitch = () => (
        <Switch>
            {topicRoute() }
            <Route></Route>
        </Switch>
    )

    return (
        <aside className="aside-right">
            { renderSwitch() }
        </aside>
    )
}

export default AsideRightContainer