import React, { useState } from 'react'
import TextContainer from '../textEditor/containers/TextContainer'

const TopicReplyContainer = () => {

    const [displayTextArea, setDisplayTextArea] = useState(false)
    const [text, setText] = useState('')

    const toggleDisplayTextArea = () => {setDisplayTextArea(!displayTextArea)}

    const handlePost = () => {
        console.log('posting')
    }

    const style = {
        bottom: `${displayTextArea ? 250 : 0}px`
    }

    const replyCaret = displayTextArea ? <i className="fa fa-caret-down" aria-hidden="true"></i> : <i className="fa fa-caret-up" aria-hidden="true"></i>

    return (
        <div>
            <div className='bottom-bar' style={style}>
                <span onClick={toggleDisplayTextArea}>{replyCaret} Reply</span>
                { displayTextArea && <span onClick={handlePost}>Post</span>}
            </div>
            { displayTextArea && <TextContainer text={text} setText={setText} /> }
        </div>
    )
}

export default TopicReplyContainer