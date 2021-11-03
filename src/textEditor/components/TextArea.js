import React, { useEffect } from 'react'

const TextArea = React.forwardRef(({
    text, onChange, onBlur, setBottomPopUp
}, ref) => {
    
    useEffect(() => {
        ref.current.focus()
        const cleanup = () => {
            setBottomPopUp(false)
        }
        return cleanup
    }, [ref, setBottomPopUp])

    const RenderForm = () => (
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
            <RenderForm />
        </div>
)})

export default TextArea