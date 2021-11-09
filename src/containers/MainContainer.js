import React from 'react'
import { Route } from 'react-router-dom'


import UsersContainer from './UsersContainer'
import LoginContainer from './LoginContainer'
import SignupContainer from './SignupContainer'
import EditProfileContainer from './EditProfileContainer'
import SectionsContainer from './SectionsContainer'
import SubsectionContainer from './SubsectionContainer'
import TopicContainer from './TopicContainer'
import UserContainer from './UserContainer'

const subsectionRoute = () => (
    <Route
        exact path="/subsections/:subsectionId"
        render={routerProps => <SubsectionContainer {...routerProps} />}
    />
)

const topicRoute = focusTextArea => (
    <Route
        exact path="/topics/:topicId"
        render={routerProps => (
            <TopicContainer
                {...routerProps}
                focusTextArea={focusTextArea}
            />
        )}
    />
)

const userRoute = () => (
    <Route
        exact path="/users/:userId"
        render={routerProps => <UserContainer {...routerProps} />}
    />
)

const MainContainer = ({ focusTextArea }) => {
    return (
        <main>
            <Route exact path="/"><SectionsContainer /></Route>
            <Route exact path="/users"><UsersContainer /></Route>
            <Route exact path="/login"><LoginContainer /></Route>
            <Route exact path="/signup"><SignupContainer /></Route>
            <Route exact path="/edit_profile"><EditProfileContainer /></Route>
            { subsectionRoute() }
            { topicRoute(focusTextArea) }
            { userRoute() }
        </main>
    )
}

export default MainContainer