import React from 'react'

import TextArea from '../components/TextArea'
import TextPreview from '../components/TextPreview'

import { bbCodeObjects } from '../bbCode/BBCodeObject'

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

    // useEffect(() => {
    //     textAreaRef.current.setSelectionRange(selection[0], selection[1])
    //     focusTextArea()
    // }, [selection, textAreaRef, focusTextArea])

    // useEffect(() => {
    //     setBottomPopUp(true)
    //     const cleanup = () => {
    //         setBottomPopUp(false)
    //     }
    //     // return cleanup
    // }, [])

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
        <TextPreview text={text} bbCodeObjects={bbCodeObjects} />
    )

    return (
        <div className='text-container'>
            { renderTextArea() }
            { renderTextPreview() }
        </div>
    )
}

export default TextContainer