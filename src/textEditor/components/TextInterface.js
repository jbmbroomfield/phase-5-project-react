import React from 'react'
import TextInterfaceButton from './TextInterfaceButton'
import TextInterfaceGroup from './TextInterfaceGroup'

const TextInterface = ({ onButtonClick, tags }) => {

    const buttons = tags.map((tag, index) => {
        return <TextInterfaceButton key={index} onClick={onButtonClick} tag={tag} />
    })

    return (
        <div className="sceditor-toolbar" unselectable="on">
            <TextInterfaceGroup buttons={buttons} />
        </div>
    )
}

export default TextInterface