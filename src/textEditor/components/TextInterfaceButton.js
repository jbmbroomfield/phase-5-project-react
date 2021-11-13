import React from 'react'

const TextInterfaceButton = ({ onClick, tag }) => {
    const renderButton = () => (
        <span
            onClick={() => onClick(tag.insert)}
            className={`sceditor-button sceditor-button-${tag.value}`}
            title={tag.title}
            unselectable="on"
        >
            <div unselectable="on"></div>
        </span>
    )

    return renderButton()
}


export default TextInterfaceButton