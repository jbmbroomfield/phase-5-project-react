import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AsideRightTopicContainer from './AsideRightTopicContainer'

const AsideRightContainer = () => {

    const TopicRoute = () => (
        <Route
            exact path="/topics/:topicId"
            render={routerProps => <AsideRightTopicContainer {...routerProps}/>}
        />
    )

    const RenderSwitch = () => (
        <Switch>
            <TopicRoute />
            <Route><div>Default Right Aside</div></Route>
        </Switch>
    )

    return (
        <aside className="aside-right">
            <RenderSwitch />
        </aside>
    )
}

export default AsideRightContainer