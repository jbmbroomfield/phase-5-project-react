import React, { useState, useRef, useEffect } from 'react'

import TextInterface from '../components/TextInterface'
import TextArea from '../components/TextArea'
import TextPreview from '../components/TextPreview'

import { bbCodeObjects } from '../bbCode/BBCodeObject'

const TextContainer = ({ text, setText, selection, setSelection }) => {

    const textArea = useRef(null)

    const handleTextAreaChange = event => {
        const nextText = event.target.value
        setText(nextText)
    }

    const handleTextAreaBlur = event => {
        setSelection([event.target.selectionStart, event.target.selectionEnd])
    }

    useEffect(() => {
        textArea.current.focus()
        textArea.current.setSelectionRange(selection[0], selection[1])
    }, [selection])

    return (
        <div className='text-container'>
            <TextArea ref={textArea} text={text} onChange={handleTextAreaChange} onBlur={handleTextAreaBlur} />
            <TextPreview text={text} bbCodeObjects={bbCodeObjects} />
        </div>
    )
}

export default TextContainer