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

    return (
        <div className='text-area'>
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
        </div>
)})

export default TextArea