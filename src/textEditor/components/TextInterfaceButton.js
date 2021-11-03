import React from 'react'

const TextInterfaceButton = ({ bbCodeObject, onClick }) => {
    const insertion = bbCodeObject.insertion
    const display = bbCodeObject.display

    const RenderButton = () => (
        <span
            onClick={() => onClick(insertion.insert)}
            className={`sceditor-button sceditor-button-${display.value}`}
            title={display.title}
            unselectable="on"
        >
            <div unselectable="on"></div>
        </span>
    )

    return <RenderButton />
}


export default TextInterfaceButton