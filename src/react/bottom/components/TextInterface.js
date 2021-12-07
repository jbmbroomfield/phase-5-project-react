import React from 'react'
import TextInterfaceButton from './TextInterfaceButton'
import TextInterfaceGroup from './TextInterfaceGroup'

const TextInterface = ({
    onButtonClick, tags,
    datetime, handleDatetimeChange, handleInputDate,
    guestName, handleGuestNameChange,
    enteredPassword, handleEnteredPasswordChange,
    canPost, password,
    currentUserAttributes,
    submitPassword,
}) => {

    tags = tags.filter(tag => !!tag.value)

    const buttons = tags.map((tag, index) => {
        return <TextInterfaceButton key={index} onClick={onButtonClick} tag={tag} />
    })

    return <>
        <div className="sceditor-toolbar" unselectable="on">
            <TextInterfaceGroup buttons={buttons} />
        </div>
        <span><input type="datetime-local" onChange={handleDatetimeChange} value={datetime} /></span>
        <span className="nav-link" onClick={handleInputDate}>Insert Datetime</span>
        { currentUserAttributes.account_level === 'guest' && <span><input
            type="text"
            placeholder="Name"
            value={guestName || ''}
            onChange={handleGuestNameChange}
        /></span> }
    </>
}

export default TextInterface