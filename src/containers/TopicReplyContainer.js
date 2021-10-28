import React, { useState } from 'react'
import { connect } from 'react-redux'
import TextContainer from '../textEditor/containers/TextContainer'
import { createPost } from '../actions/postsActions'

const TopicReplyContainer = ({ topicId, createPost }) => {

    const [displayTextArea, setDisplayTextArea] = useState(false)
    const [text, setText] = useState('')

    const toggleDisplayTextArea = () => {setDisplayTextArea(!displayTextArea)}

    const handlePost = () => {
        createPost(topicId, text)
        setText('')
        setDisplayTextArea(false)
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

const mapDispatchToProps = dispatch => ({
    createPost: (topicId, text) => dispatch(createPost(topicId, text))
})

export default connect(null, mapDispatchToProps)(TopicReplyContainer)