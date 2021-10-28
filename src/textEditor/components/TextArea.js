import React from 'react'

const TextArea = React.forwardRef((props, ref) => (
    <div className='text-area'>
        <form>
            <textarea
                ref={ref}
                id="textarea"
                name="text"
                value={props.text}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </form>
    </div>
))

export default TextArea