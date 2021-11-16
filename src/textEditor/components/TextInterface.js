import React from 'react'
import TextInterfaceButton from './TextInterfaceButton'
import TextInterfaceGroup from './TextInterfaceGroup'

const TextInterface = ({ onButtonClick, tags, datetime, handleDatetimeChange, handleInputDate,}) => {

    tags = tags.filter(tag => !!tag.value)

    const buttons = tags.map((tag, index) => {
        return <TextInterfaceButton key={index} onClick={onButtonClick} tag={tag} />
    })

    return (
        <>
            <div className="sceditor-toolbar" unselectable="on">
                <TextInterfaceGroup buttons={buttons} />
            </div>
            <input type="datetime-local" onChange={handleDatetimeChange} value={datetime} />
            <span onClick={handleInputDate}>Input Date</span>
        </>
    )
}

export default TextInterface