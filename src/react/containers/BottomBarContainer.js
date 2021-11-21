import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import TopicReplyContainer from './TopicReplyContainer'
import SubsectionBottomBarContainer from './SubsectionBottomBarContainer'

import { setBottomPopUp } from '../../actions/bottomPopUpActions'

const BottomBarContainer = ({
    focusTextArea, textAreaRef
}) => {

    const dispatch = useDispatch()

    const bottomPopUp = useSelector(state => state.bottomPopUp)

    const topicRoute = () => (
        <Route
            exact path="/forum/:subsectionSlug/:topicSlug"
            render={routerProps => (
                <TopicReplyContainer
                    {...routerProps}
                    bottomPopUp={bottomPopUp}
                    setBottomPopUp={bottomPopUp => dispatch(setBottomPopUp(bottomPopUp))}
                    focusTextArea={focusTextArea}
                    textAreaRef={textAreaRef}
                />
            )}
        />
    )
    
    const subsectionRoute = () => (
        <Route
            exact path="/forum/:subsectionSlug"
            render={routerProps => (
                <SubsectionBottomBarContainer
                    {...routerProps}
                    // setBottomPopUp={setBottomPopUp}
                    // focusTextArea={focusTextArea}
                    // textAreaRef={textAreaRef}
                />
            )}
        />
    )

    const renderSwitch = () => (
        <Switch>
            { topicRoute() }
            { subsectionRoute() }
        </Switch>
    )

    return (
        <div className="bottom-bar">
            { renderSwitch() }
        </div>
    )
}

export default BottomBarContainer