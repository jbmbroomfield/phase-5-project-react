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
            <span><input type="datetime-local" onChange={handleDatetimeChange} value={datetime} /></span>
            <span className="nav-link" onClick={handleInputDate}>Insert Datetime</span>
        </>
    )
}

export default TextInterface