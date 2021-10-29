import React from 'react'
import { connect } from 'react-redux'

import BottomBar from '../components/BottomBar'
import TextContainer from '../textEditor/containers/TextContainer'

import { createTopic } from '../actions/topicsActions'

const NewTopicContainer = ({
    createTopic,
    handleButtonClick,
    subsectionId,
    displayTextArea, setDisplayTextArea,
    title, setTitle,
    text, setText,
    selection, setSelection,
}) => {

    const toggleDisplayTextArea = () => {setDisplayTextArea(!displayTextArea)}
    
    const handlePost = () => {
        createTopic(subsectionId, title, text)
        setText('')
        setTitle('')
        setDisplayTextArea(false)
    }

    return (
        <div>
            <BottomBar
                toggleLabel="New Topic"
                displayTextArea={displayTextArea}
                toggleDisplayTextArea={toggleDisplayTextArea}
                handlePost={handlePost}
                handleButtonClick={handleButtonClick}
                text={text}
                title={title}
                setTitle={setTitle}
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
    createTopic: (
        subsectionId, title, text
    ) => dispatch(createTopic(
        subsectionId, title, text
    ))
})

export default connect(null, mapDispatchToProps)(NewTopicContainer)