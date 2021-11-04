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

    const renderForm = () => (
        <form>
            <textarea
                ref={ref}
                id="textarea"
                name="text"
                value={text}
                onChange={onChange}
                onBlur={onBlur}
            />
        </form>
    )

    return (
        <div className='text-area'>
            { renderForm() }
        </div>
)})

export default TextArea