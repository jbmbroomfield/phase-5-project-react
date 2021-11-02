import React from 'react'

import TextInterface from '../textEditor/components/TextInterface'

import { bbCodeObjects } from '../textEditor/bbCode/BBCodeObject'

const BottomBar = ({
    displayTextArea, toggleDisplayTextArea,
    handlePost,
    handleButtonClick,
    title, setTitle,
    text,
    toggleLabel,
}) => {

    const style = {
        bottom: `${displayTextArea ? 250 : 0}px`
    }

    const replyCaret = displayTextArea ? <i className="fa fa-caret-down" aria-hidden="true"></i> : <i className="fa fa-caret-up" aria-hidden="true"></i>

    return (
        <div className="bottom-bar" style={style}>
            { displayTextArea && (
                <TextInterface onButtonClick={handleButtonClick} bbCodeObjects={bbCodeObjects} />
            ) }
            { displayTextArea && toggleLabel === 'New Topic' && (
                <input
                    type="text"
                    className="topic-title-input"
                    placeholder="Title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
            )}
            <span className="nav-link float-right" onClick={toggleDisplayTextArea}>{replyCaret} {toggleLabel}</span>
            { displayTextArea && text.length > 0 && (toggleLabel === 'Reply' || title.length > 0) && (
                <span className="nav-link float-right" onClick={handlePost}>Post</span>
            ) }
        </div>
    )
}

export default BottomBar