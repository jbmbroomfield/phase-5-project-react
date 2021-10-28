import React, { useState } from 'react'
import { connect } from 'react-redux'
import TextContainer from '../textEditor/containers/TextContainer'
import { createPost } from '../actions/postsActions'
import BottomBar from '../components/BottomBar'

const TopicReplyContainer = ({
    createPost,
    handleButtonClick,
    topicId,
    displayTextArea, setDisplayTextArea,
    text, setText,
    selection, setSelection,
}) => {

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
                handleButtonClick={handleButtonClick}
                text={text}
            />
            { displayTextArea && (
                <TextContainer
                    text={text}
                    setText={setText}
                    selection={selection}
                    setSelection={setSelection}
                />
             ) }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    createPost: (topicId, text) => dispatch(createPost(topicId, text))
})

export default connect(null, mapDispatchToProps)(TopicReplyContainer)