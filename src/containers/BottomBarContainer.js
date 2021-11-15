import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import TopicReplyContainer from './TopicReplyContainer'

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

    const renderSwitch = () => (
        <Switch>
            { topicRoute() }
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