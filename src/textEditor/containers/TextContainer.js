import React, { useRef, useEffect } from 'react'

import TextArea from '../components/TextArea'
import TextPreview from '../components/TextPreview'

import { bbCodeObjects } from '../bbCode/BBCodeObject'

const TextContainer = ({ text, setText, selection, setSelection, unfocusDraft, draftFocused }) => {

    const textArea = useRef(null)

    const handleTextAreaChange = event => {
        const nextText = event.target.value
        setText(nextText, [event.target.selectionStart, event.target.selectionEnd])
    }

    const handleTextAreaBlur = event => {
        setSelection([event.target.selectionStart, event.target.selectionEnd])
        unfocusDraft()
    }

    useEffect(() => {
        draftFocused && textArea.current.focus() && unfocusDraft()
        textArea.current.setSelectionRange(selection[0], selection[1])
    }, [text, selection, draftFocused, unfocusDraft])

    return (
        <div className='text-container'>
            <TextArea ref={textArea} text={text} onChange={handleTextAreaChange} onBlur={handleTextAreaBlur} />
            <TextPreview text={text} bbCodeObjects={bbCodeObjects} />
        </div>
    )
}

export default TextContainer