import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'

import UsersContainer from './containers/UsersContainer'
import LoginContainer from './containers/LoginContainer.js'
import NavbarContainer from './containers/NavbarContainer'
import SectionsContainer from './containers/SectionsContainer'
import SubsectionContainer from './containers/SubsectionContainer'
import TopicContainer from './containers/TopicContainer'
import AsideLeftContainer from './containers/AsideLeftContainer'

import { fetchCurrentUser } from './actions/currentUserActions'
import { fetchSections } from './actions/sectionsActions'
import { fetchSubsections } from './actions/subsectionsActions'
import { fetchTopics } from './actions/topicsActions'
import { fetchUsers } from './actions/usersActions'
import { fetchNotifications } from './actions/notificationsActions'
import createSocket from './createSocket'

const App = ({
	fetchCurrentUser,
	fetchSections,
	fetchSubsections,
	fetchTopics,
	fetchUsers,
	currentUser,
	fetchNotifications,
	bottomPopUp,
}) => {

	useEffect(() => {
		const mainSocketParams = {
			channel: "MainChannel"
		}
		const mainSocketOnUpdate = () => {
			fetchCurrentUser()
			fetchSections()
			fetchSubsections()
			fetchTopics()
			fetchUsers()
		}
		const mainSocket = createSocket(mainSocketParams, mainSocketOnUpdate)

		const notificationsSocketParams = {
			channel: "NotificationsChannel",
			user_id: currentUser.id
		}
		const notificationsSocketOnUpdate = () => {
			fetchNotifications()
		}
		const notificationsSocket = createSocket(notificationsSocketParams, notificationsSocketOnUpdate)

		return () => {
			mainSocket.close(1000)
			notificationsSocket.close(1000)
		}
	}, [
		fetchCurrentUser,
		fetchSections,
		fetchSubsections,
		fetchTopics,
		fetchUsers,
		currentUser.id,
		fetchNotifications,
	])

	const bottomBarHeight = bottomPopUp ? '309' : '50'

	const style = {
  		"grid-template-rows": `50px 1fr ${bottomBarHeight}px`
	}

	return (
		<Router>
		<div className="App" style={style}>
			<NavbarContainer />
			<AsideLeftContainer />
			<Route exact path="/"><SectionsContainer /></Route>
			<Route exact path="/users"><UsersContainer /></Route>
			<Route exact path="/login"><LoginContainer /></Route>
			<Route
				path="/subsections/:subsectionId"
				render={routerProps => <SubsectionContainer {...routerProps}/>}
			/>
			<Route
				path="/topics/:topicId"
				render={routerProps => <TopicContainer {...routerProps}/>}
			/>
		</div>
		</Router>
	);
}

const mapStateToProps = state => ({
  	currentUser: state.currentUser,
	bottomPopUp: state.bottomPopUp,
})

const mapDispatchToProps = dispatch => ({
	fetchCurrentUser: () => dispatch(fetchCurrentUser()),
	fetchSections: () => dispatch(fetchSections()),
	fetchSubsections: () => dispatch(fetchSubsections()),
	fetchTopics: () => dispatch(fetchTopics()),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchNotifications: () => dispatch(fetchNotifications())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
