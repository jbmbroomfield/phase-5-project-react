import React, { useState } from 'react'
import { connect } from 'react-redux'
import TextContainer from '../textEditor/containers/TextContainer'
import { createPost } from '../actions/postsActions'
import BottomBar from '../components/BottomBar'

const TopicReplyContainer = ({ topicId, createPost }) => {

    const [displayTextArea, setDisplayTextArea] = useState(false)
    const [text, setText] = useState('')

    const toggleDisplayTextArea = () => {setDisplayTextArea(!displayTextArea)}

    const handlePost = () => {
        createPost(topicId, text)
        setText('')
        setDisplayTextArea(false)
    }
    return (
        <div>
            <BottomBar
                displayTextArea={displayTextArea}
                toggleDisplayTextArea={toggleDisplayTextArea}
                handlePost={handlePost}
            />
            { displayTextArea && <TextContainer text={text} setText={setText} /> }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    createPost: (topicId, text) => dispatch(createPost(topicId, text))
})

export default connect(null, mapDispatchToProps)(TopicReplyContainer)