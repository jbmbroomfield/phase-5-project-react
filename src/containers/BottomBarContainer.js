import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import TopicReplyContainer from './TopicReplyContainer'

import { setBottomPopUp } from '../actions/bottomPopUpActions'

const BottomBarContainer = ({
    bottomPopUp, setBottomPopUp
}) => {
    return (
        <div className="bottom-bar">
            <Switch>
                <Route
                    exact path="/topics/:topicId"
                    render={routerProps => (
                        <TopicReplyContainer
                            {...routerProps}
                            bottomPopUp={bottomPopUp}
                            setBottomPopUp={setBottomPopUp}
                        />
                    )}
                />
                <span>Default Bottom Bar</span>
            </Switch>
        </div>
    )
}

const mapStateToProps = state => ({
    bottomPopUp: state.bottomPopUp
})

const mapDispatchToProps = dispatch => ({
    setBottomPopUp: bottomPopUp => dispatch(setBottomPopUp(bottomPopUp))
})


export default connect(mapStateToProps, mapDispatchToProps)(BottomBarContainer)