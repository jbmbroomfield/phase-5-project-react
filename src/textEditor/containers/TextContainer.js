import React from 'react'

import TextArea from '../components/TextArea'
import TextPreview from '../components/TextPreview'

const TextContainer = ({
    text, setText,
    selection, setSelection,
    setBottomPopUp,
    textAreaRef,
    focusTextArea,
}) => {

    const handleTextAreaChange = event => {
        const nextText = event.target.value
        setText(nextText, [event.target.selectionStart, event.target.selectionEnd])
    }

    const handleTextAreaBlur = event => {
        setSelection([event.target.selectionStart, event.target.selectionEnd])
    }

    const renderTextArea = () => (
        <TextArea
            key="text-area"
            ref={textAreaRef}
            text={text}
            onChange={handleTextAreaChange}
            onBlur={handleTextAreaBlur}
            setBottomPopUp={setBottomPopUp}
        />
    )
    
    const renderTextPreview = () => (
        <TextPreview text={text} />
    )

    return (
        <div className='text-container'>
            { renderTextArea() }
            { renderTextPreview() }
        </div>
    )
}

export default TextContainer