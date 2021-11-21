import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

import NavbarContainer from './containers/NavbarContainer'
import AsideLeftContainer from './containers/AsideLeftContainer'
import MainContainer from './containers/MainContainer'
import AsideRightContainer from './containers/AsideRightContainer'
import BottomBarContainer from './containers/BottomBarContainer'

import { fetchCurrentUser } from './actions/currentUserActions'
import { fetchSections } from './actions/sectionsActions'
import { fetchSubsections } from './actions/subsectionsActions'
import { fetchUsers } from './actions/usersActions'
import { fetchNotifications } from './actions/notificationsActions'
import { setBottomPopUp } from './actions/bottomPopUpActions'

import mainChannel from './channels/mainChannel'
import userChannel from './channels/userChannel'

const App = () => {

	const dispatch = useDispatch()

	const currentUser = useSelector(state => state.currentUser)
	const bottomPopUp = useSelector(state => state.bottomPopUp)

	useEffect(() => {
		const mainOnUpdate = () => {
			dispatch(fetchCurrentUser())
			dispatch(fetchSections())
			dispatch(fetchSubsections())
			dispatch(fetchUsers())
		}
		mainOnUpdate()
		return mainChannel(mainOnUpdate)
	}, [dispatch])

	const textAreaRef = useRef(null)

	const tryToFocusTextArea = (draft, selection, attempt) => {
		setTimeout(() => {
			if (textAreaRef && textAreaRef.current) {
				textAreaRef.current.focus()
				if (!selection && draft && draft.attributes) {
					selection = draft.attributes.selection
				}
				if (selection) {
					textAreaRef.current.setSelectionRange(...selection)
				}
			} else if (attempt < 1000) {
				tryToFocusTextArea(draft, attempt + 1)
			}
		}, 10)		
	}

	const focusTextArea = ({draft, selection} = {}) => {
		dispatch(setBottomPopUp(true))
		tryToFocusTextArea(draft, selection, 0)
	}

	useEffect(() => {
		if (currentUser) {
			dispatch(fetchNotifications())
			return userChannel(currentUser.id, () => dispatch(fetchNotifications()))
		}
	}, [currentUser, dispatch])

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

export default (App);
