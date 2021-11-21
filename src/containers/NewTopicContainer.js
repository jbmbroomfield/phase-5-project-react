import React from 'react'
import { useDispatch } from 'react-redux'

import BottomBar from '../components/BottomBar'
import TextContainer from '../textEditor/containers/TextContainer'
import { useHistory } from 'react-router-dom'

import { createTopic } from '../actions/topicsActions'

const NewTopicContainer = ({
    handleButtonClick,
    subsectionId,
    displayTextArea, setDisplayTextArea,
    title, setTitle,
    text, setText,
    selection, setSelection,
}) => {

	const dispatch = useDispatch()
    
    const history = useHistory()

    const toggleDisplayTextArea = () => {setDisplayTextArea(!displayTextArea)}
    
    const redirect = topicId => {
        history.push(`/topics/${topicId}`)
    }

    const handlePost = () => {
        dispatch(createTopic(subsectionId, title, text, redirect))
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

export default NewTopicContainer