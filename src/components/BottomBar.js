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
}) => {

    const style = {
        bottom: `${bottomPopUp ? 250 : 0}px`
    }

    const replyCaret = bottomPopUp ? <i className="fa fa-caret-down" aria-hidden="true"></i> : <i className="fa fa-caret-up" aria-hidden="true"></i>

    return (
        <div className="bottom-bar" style={style}>
            { bottomPopUp && (
                <TextInterface onButtonClick={handleButtonClick} bbCodeObjects={bbCodeObjects} />
            ) }
            { bottomPopUp && toggleLabel === 'New Topic' && (
                <input
                    type="text"
                    className="topic-title-input"
                    placeholder="Title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
            )}
            <span className="nav-link float-right" onClick={() => setBottomPopUp(!bottomPopUp)}>{replyCaret} {toggleLabel}</span>
            { bottomPopUp && text.length > 0 && (toggleLabel === 'Reply' || title.length > 0) && (
                <span className="nav-link float-right" onClick={handlePost}>Post</span>
            ) }
        </div>
    )
}

export default BottomBar