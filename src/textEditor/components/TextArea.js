import React from 'react'

// const TextArea = React.forwardRef((props, ref) => (
const TextArea = React.forwardRef(({
    text, onChange, onBlur
}, ref) => (

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
))

export default TextArea