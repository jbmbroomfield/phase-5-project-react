import React from 'react'

import TextInterface from '../textEditor/components/TextInterface'

import allTags from '../textEditor/bbCode/tags/allTags'

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

    const renderTextInterface = () => (
        bottomPopUp ? (
            <TextInterface onButtonClick={handleButtonClick} tags={allTags}/>
        ) : null
    )

    const renderNewTopicTitleInput = () => (
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

    const renderToggler = () => (
        <span className="nav-link float-right" onClick={handleToggleClick}>{replyCaret} {toggleLabel}</span>
    )

    const renderPostButton = () => (
        (bottomPopUp && text.length > 0) ? (toggleLabel === 'Reply' || title.length > 0) && (
            <span className="nav-link float-right" onClick={handlePost}>Post</span>
        ) : null
    )

    return (
        <div className="bottom-bar" style={style}>
            { renderTextInterface() }
            { renderNewTopicTitleInput() }
            { renderToggler() }
            { renderPostButton() }
        </div>
    )
}

export default BottomBar