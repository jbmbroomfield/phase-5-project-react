import React from 'react'
import TextInterfaceButton from './TextInterfaceButton'
import TextInterfaceGroup from './TextInterfaceGroup'

const TextInterface = ({
    onButtonClick, tags,
    datetime, handleDatetimeChange, handleInputDate,
    guestName, handleGuestNameChange,
    enteredPassword, handleEnteredPasswordChange,
    canPost, password,
    currentUser,
    submitPassword,
}) => {

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
            { !currentUser && <span><input
                type="text"
                placeholder="Name"
                value={guestName}
                onChange={handleGuestNameChange}
            /></span> }
            { !canPost && password && password.length > 0 && <>
                <span><input 
                    type="text"
                    placeholder="Password required"
                    value={enteredPassword}
                    onChange={handleEnteredPasswordChange}
                /></span>
                { enteredPassword.length > 0 && <span
                    className="nav-link"
                    onClick={submitPassword}
                >Submit Password</span> }
            </>}
        </>
    )
}

export default TextInterface