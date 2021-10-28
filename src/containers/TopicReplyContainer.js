import React, { useState } from 'react'

const TopicReplyContainer = () => {

    const [displayTextArea, setDisplayTextArea] = useState(false)

    const toggleDisplayTextArea = () => {setDisplayTextArea(!displayTextArea)}

    const style = {
        bottom: `${displayTextArea ? 250 : 0}px`
    }

    const replyCaret = displayTextArea ? <i class="fa fa-caret-down" aria-hidden="true"></i> : <i class="fa fa-caret-up" aria-hidden="true"></i>

    return (
        <div className='bottom-bar' style={style}>
            <span onClick={toggleDisplayTextArea}>{replyCaret} Reply</span>
        </div>
    )
}

export default TopicReplyContainer