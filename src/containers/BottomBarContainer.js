import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import TopicReplyContainer from './TopicReplyContainer'
import SubsectionBottomBarContainer from './SubsectionBottomBarContainer'

import { setBottomPopUp } from '../actions/bottomPopUpActions'

const BottomBarContainer = ({
    bottomPopUp, setBottomPopUp,
    focusTextArea, textAreaRef
}) => {

    const topicRoute = () => (
        <Route
            exact path="/forum/:subsectionSlug/:topicSlug"
            render={routerProps => (
                <TopicReplyContainer
                    {...routerProps}
                    bottomPopUp={bottomPopUp}
                    setBottomPopUp={setBottomPopUp}
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

const mapStateToProps = state => ({
    bottomPopUp: state.bottomPopUp
})

const mapDispatchToProps = {
    setBottomPopUp,
}


export default connect(mapStateToProps, mapDispatchToProps)(BottomBarContainer)