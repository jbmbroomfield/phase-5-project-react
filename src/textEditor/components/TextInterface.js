import React from 'react'
import TextInterfaceButton from './TextInterfaceButton'
import TextInterfaceGroup from './TextInterfaceGroup'

const TextInterface = ({ bbCodeObjects, onButtonClick }) => {

    const buttons = bbCodeObjects.map((bbCodeObject, index) => {
        return <TextInterfaceButton key={index} onClick={onButtonClick} bbCodeObject={bbCodeObject} />
    })

    return (
        <div className="sceditor-toolbar" unselectable="on">
            <TextInterfaceGroup buttons={buttons} />
        </div>
    )
}

export default TextInterface