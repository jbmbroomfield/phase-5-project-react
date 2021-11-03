import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AsideRightTopicContainer from './AsideRightTopicContainer'

const AsideRightContainer = () => {
    return (
        <aside className="aside-right">
            <Switch>
                <Route
                    exact path="/topics/:topicId"
                    render={routerProps => <AsideRightTopicContainer {...routerProps}/>}
                />
                <Route><div>Default Right Aside</div></Route>
            </Switch>
        </aside>
    )
}

export default AsideRightContainer