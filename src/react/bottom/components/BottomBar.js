import React from 'react'

import TextInterfaceContainer from '../containers/TextInterfaceContainer'

import allTags from 'bbCode/tags/allTags'

const BottomBar = ({
    bottomPopUp, setBottomPopUp,
    handlePost,
    handleButtonClick,
    title, setTitle,
    text,
    toggleLabel,
    handleToggleClick,
    timezone,
    topicId,
    focusTextArea,
    handleNewTopic,
    canPost,
    password,
    subsectionSlug,
    topicSlug,
    showPasswordEntry,
    enteredPassword, handleEnteredPasswordChange,
    submitPassword,
    guestName, setGuestName,
}) => {

    const style = {
        bottom: `${bottomPopUp ? 250 : 0}px`
    }

    const renderReplyCaret = () => {
        if (bottomPopUp) {
            return <i className="fa fa-caret-down" aria-hidden="true"></i>
        }
        if (!canPost) {
            if (showPasswordEntry) {
                return <i className="fa fa-caret-right" aria-hidden="true"></i>
            }
            return <i className="fa fa-caret-left" aria-hidden="true"></i>
        }
        return <i className="fa fa-caret-up" aria-hidden="true"></i>
    }

    const renderTextInterface = () => (
        bottomPopUp ? (
            <TextInterfaceContainer
                onButtonClick={handleButtonClick}
                tags={allTags}
                timezone={timezone}
                topicId={topicId}
                focusTextArea={focusTextArea}
                canPost={canPost}
                password={password}
                subsectionSlug={subsectionSlug}
                topicSlug={topicSlug}
                guestName={guestName} setGuestName={setGuestName}
            />
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

    const renderPasswordEntry = () => <>
        <span className="nav-link float-right" onClick={submitPassword} >Submit Password</span>
        <span className="float-right"><input 
            type="text"
            placeholder="Password required"
            value={enteredPassword}
            onChange={handleEnteredPasswordChange}
        /></span>
    </>

    const renderToggler = () => {
        if (toggleLabel === 'New Topic') {
            return <span className="nav-link float-right" onClick={handleNewTopic}>{toggleLabel}</span>
        }
        const style={}
        if (!canPost) {
            style.color = '#999'
        }
        return <span className="nav-link float-right" style={style} onClick={handleToggleClick}>{renderReplyCaret()} {toggleLabel}</span>
    }

    const renderPostButton = () => (
        (bottomPopUp && text.length > 0 && canPost) ? (toggleLabel === 'Reply' || title.length > 0) && (
            <span className="nav-link float-right" onClick={handlePost}>Post</span>
        ) : null
    )

    return (
        <div className="bottom-bar" style={style}>
            { renderTextInterface() }
            { renderNewTopicTitleInput() }
            { renderToggler() }
            { showPasswordEntry && renderPasswordEntry() }
            { renderPostButton() }
        </div>
    )
}

export default BottomBar