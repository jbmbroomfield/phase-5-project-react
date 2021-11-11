import React from 'react'
import { connect } from 'react-redux'

import BottomBar from '../components/BottomBar'
import TextContainer from '../textEditor/containers/TextContainer'
import { useHistory } from 'react-router-dom'

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

    
    const history = useHistory()

    const toggleDisplayTextArea = () => {setDisplayTextArea(!displayTextArea)}
    
    const redirect = topicId => {
        history.push(`/topics/${topicId}`)
    }

    const handlePost = () => {
        createTopic(subsectionId, title, text, redirect)
        setText('')
        setTitle('')
        setDisplayTextArea(false)
    }

    const renderBottomBar = () => (
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
    )

    const renderTextContainer = () => (
        displayTextArea ? (
            <TextContainer
                text={text}
                setText={setText}
                selection={selection}
                setSelection={setSelection}
            />
        ) : null 
    )

    return (
        <>
            { renderBottomBar() }
            { renderTextContainer() }
        </>
    )
}

const mapDispatchToProps = {
    createTopic,
}

export default connect(null, mapDispatchToProps)(NewTopicContainer)