import React from 'react'
import { Route } from 'react-router-dom'


import UsersContainer from './UsersContainer'
import LoginContainer from './LoginContainer'
import SectionsContainer from './SectionsContainer'
import SubsectionContainer from './SubsectionContainer'
import TopicContainer from './TopicContainer'

const MainContainer = ({ focusTextArea }) => {
    return (
        <main>
            <Route exact path="/"><SectionsContainer /></Route>
            <Route exact path="/users"><UsersContainer /></Route>
            <Route exact path="/login"><LoginContainer /></Route>
            <Route
                exact path="/subsections/:subsectionId"
                render={routerProps => <SubsectionContainer {...routerProps}/>}
            />
            <Route
                exact path="/topics/:topicId"
                render={routerProps => (
                    <TopicContainer
                        {...routerProps}
                        focusTextArea={focusTextArea}
                    />
                )}
            />
        </main>
    )
}

export default MainContainer