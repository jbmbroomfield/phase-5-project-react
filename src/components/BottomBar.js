import React from 'react'

import TextInterface from '../textEditor/components/TextInterface'

import { bbCodeObjects } from '../textEditor/bbCode/BBCodeObject'

const BottomBar = ({
    bottomPopUp, setBottomPopUp,
    handlePost,
    handleButtonClick,
    title, setTitle,
    text,
    toggleLabel,
    handleToggleClick
}) => {

    const style = {
        bottom: `${bottomPopUp ? 250 : 0}px`
    }

    const replyCaret = bottomPopUp ? <i className="fa fa-caret-down" aria-hidden="true"></i> : <i className="fa fa-caret-up" aria-hidden="true"></i>

    const RenderTextInterface = () => (
        bottomPopUp ? (
            <TextInterface onButtonClick={handleButtonClick} bbCodeObjects={bbCodeObjects} />
        ) : null
    )

    const RenderNewTopicTitleInput = () => (
        (bottomPopUp && toggleLabel === 'New Topic') ? (
            <input
                type="text"
                className="topic-title-input"
                placeholder="Title"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
        ) : null
    )

    const RenderToggler = () => (
        <span className="nav-link float-right" onClick={handleToggleClick}>{replyCaret} {toggleLabel}</span>
    )

    const RenderPostButton = () => (
        (bottomPopUp && text.length > 0) ? (toggleLabel === 'Reply' || title.length > 0) && (
            <span className="nav-link float-right" onClick={handlePost}>Post</span>
        ) : null
    )

    return (
        <div className="bottom-bar" style={style}>
            <RenderTextInterface />
            <RenderNewTopicTitleInput />
            <RenderToggler />
            <RenderPostButton />
        </div>
    )
}

export default BottomBar