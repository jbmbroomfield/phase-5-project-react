import React from 'react'

import TextInterface from '../textEditor/components/TextInterface'

import { bbCodeObjects } from '../textEditor/bbCode/BBCodeObject'

const BottomBar = ({ displayTextArea, toggleDisplayTextArea, handlePost, handleButtonClick, text }) => {

    const style = {
        bottom: `${displayTextArea ? 250 : 0}px`
    }

    const replyCaret = displayTextArea ? <i className="fa fa-caret-down" aria-hidden="true"></i> : <i className="fa fa-caret-up" aria-hidden="true"></i>

    return (
        <div className="bottom-bar" style={style}>
            { displayTextArea && (
                <TextInterface onButtonClick={handleButtonClick} bbCodeObjects={bbCodeObjects} />
            ) }
            <span className="nav-link" onClick={toggleDisplayTextArea}>{replyCaret} Reply</span>
            { displayTextArea && text.length > 0 && (
                <span className="nav-link" onClick={handlePost}>Post</span>
            ) }
        </div>
    )
}

export default BottomBar