import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

import NavbarContainer from './containers/NavbarContainer'
import AsideLeftContainer from './containers/AsideLeftContainer'
import MainContainer from './containers/MainContainer'
import AsideRightContainer from './containers/AsideRightContainer'
import BottomBarContainer from './containers/BottomBarContainer'

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
  		gridTemplateRows: `50px 1fr ${bottomBarHeight}px`
	}

	return (
		<div className="App" style={style}>
		    <Router>
				<NavbarContainer />
				<AsideLeftContainer />
				<MainContainer />
				<AsideRightContainer />
				<BottomBarContainer />
		    </Router>
		</div>
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
