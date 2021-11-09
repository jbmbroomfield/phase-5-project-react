import React, { useEffect, useRef } from 'react'
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
import { setBottomPopUp } from './actions/bottomPopUpActions'

import mainChannel from './channels/mainChannel'
import userChannel from './channels/userChannel'

const App = ({
	fetchCurrentUser,
	fetchSections,
	fetchSubsections,
	fetchTopics,
	fetchUsers,
	currentUser,
	fetchNotifications,
	bottomPopUp, setBottomPopUp,
}) => {

	const textAreaRef = useRef(null)

	const tryToFocusTextArea = (draft, attempt) => {
		setTimeout(() => {
			if (textAreaRef && textAreaRef.current) {
				textAreaRef.current.focus()
				if (draft && draft.attributes) {
					const selection = draft.attributes.selection
					textAreaRef.current.setSelectionRange(...selection)
				}
			} else if (attempt < 1000) {
				tryToFocusTextArea(draft, attempt + 1)
			}
		}, 10)		
	}

	const focusTextArea = (draft) => {
		setBottomPopUp(true)
		tryToFocusTextArea(draft, 0)
	}

	useEffect(() => {
		const mainOnUpdate = () => {
			fetchCurrentUser()
			fetchSections()
			fetchSubsections()
			fetchTopics()
			fetchUsers()
		}
		mainOnUpdate()
		return mainChannel(mainOnUpdate)
	}, [
		fetchCurrentUser,
		fetchSections,
		fetchSubsections,
		fetchTopics,
		fetchUsers,
		// currentUser.id,
		fetchNotifications,
	])

	useEffect(() => {
		if (currentUser) {
			fetchNotifications()
			return userChannel(currentUser.id, fetchNotifications)
		}
	}, [currentUser, fetchNotifications])

	const bottomBarHeight = bottomPopUp ? '309' : '50'

	const style = {
  		gridTemplateRows: `50px 1fr ${bottomBarHeight}px`
	}

	return (
		<div className="App" style={style}>
		    <Router>
				<NavbarContainer />
				<AsideLeftContainer />
				<MainContainer focusTextArea={focusTextArea} />
				<AsideRightContainer />
				<BottomBarContainer focusTextArea={focusTextArea} textAreaRef={textAreaRef} />
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
	fetchNotifications: () => dispatch(fetchNotifications()),
	setBottomPopUp: bottomPopUp => dispatch(setBottomPopUp(bottomPopUp)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
