import React, { useEffect } from 'react'

const TextArea = React.forwardRef(({
    text, onChange, onBlur, setBottomPopUp
}, ref) => {
    
    useEffect(() => {
        const cleanup = () => {
            setBottomPopUp(false)
        }
        return cleanup
    }, [setBottomPopUp])

    return (
        <textarea
            ref={ref}
            id="textarea"
            name="text"
            value={text}
            onChange={onChange}
            onBlur={onBlur}
        />
)})

export default TextArea