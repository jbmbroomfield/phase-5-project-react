import React, { useState, useRef, useEffect } from 'react'

import TextInterface from '../components/TextInterface'
import TextArea from '../components/TextArea'
import TextPreview from '../components/TextPreview'

import { bbCodeObjects } from '../bbCode/BBCodeObject'

const TextContainer = ({ text, setText }) => {

    const [selectionStart, setSelectionStart] = useState(0)
    const [selectionEnd, setSelectionEnd] = useState(0)

    const textArea = useRef(null)

    const handleTextAreaChange = event => {
        const nextText = event.target.value
        setText(nextText)
    }

    const handleTextAreaBlur = event => {
        setSelectionStart(event.target.selectionStart)
        setSelectionEnd(event.target.selectionEnd)
    }

    const handleButtonClick = insert => {
        const [nextText, nextSelectionStart, nextSelectionEnd] = insert(text, selectionStart, selectionEnd)
        setText(nextText)
        setSelectionStart(nextSelectionStart)
        setSelectionEnd(nextSelectionEnd)
    }

    useEffect(() => {
        textArea.current.focus()
        textArea.current.setSelectionRange(selectionStart, selectionEnd)
    }, [selectionStart, selectionEnd])

    return (
        <div className='text-container'>
            {/* <TextInterface onButtonClick={handleButtonClick} bbCodeObjects={bbCodeObjects} />
            <div></div> */}
            <TextArea ref={textArea} text={text} onChange={handleTextAreaChange} onBlur={handleTextAreaBlur} />
            <TextPreview text={text} bbCodeObjects={bbCodeObjects} />
        </div>
    )
}

export default TextContainer