import React, {  useEffect } from 'react'

import TextArea from '../components/TextArea'
import TextPreview from '../components/TextPreview'

import { bbCodeObjects } from '../bbCode/BBCodeObject'

const TextContainer = ({
    text, setText,
    selection, setSelection,
    setBottomPopUp,
    textAreaRef
}) => {

    const handleTextAreaChange = event => {
        const nextText = event.target.value
        setText(nextText, [event.target.selectionStart, event.target.selectionEnd])
    }

    const handleTextAreaBlur = event => {
        setSelection([event.target.selectionStart, event.target.selectionEnd])
    }

    useEffect(() => {
        textAreaRef.current.setSelectionRange(selection[0], selection[1])
    }, [text, selection, setBottomPopUp, textAreaRef])

    const RenderTextArea = () => (
        <TextArea
            ref={textAreaRef}
            text={text}
            onChange={handleTextAreaChange}
            onBlur={handleTextAreaBlur}
            setBottomPopUp={setBottomPopUp}
        />
    )
    
    const RenderTextPreview = () => (
        <TextPreview text={text} bbCodeObjects={bbCodeObjects} />
    )

    return (
        <div className='text-container'>
            <RenderTextArea />
            <RenderTextPreview />
        </div>
    )
}

export default TextContainer