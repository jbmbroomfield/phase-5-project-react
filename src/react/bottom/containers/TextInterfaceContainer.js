import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TextInterface from '../components/TextInterface'

import { insertIntoDraft } from 'redux/actions/draftsActions'

import { dtFromIso, isoFromDt, now } from 'DateTime'

const TextInterfaceContainer = ({
    onButtonClick, tags, timezone, topicId, focusTextArea, canPost, password,
    subsectionSlug, topicSlug,
    guestName, setGuestName
}) => {

	const dispatch = useDispatch()
    
    const currentUser = useSelector(state => state.currentUser)
    const currentUserAttributes = currentUser ? currentUser.attributes : {}

    const [datetime, setDatetime] = useState(now)
    const [enteredPassword, setEnteredPassword] = useState('')

    const submitPassword = () => {
        if (enteredPassword === password) {
            if (currentUser) {

            } else {
                localStorage.setItem(`forum/${subsectionSlug}/${topicSlug}`, enteredPassword)
            }
        } else {
            setEnteredPassword('')
        }
    }

    const handleDatetimeChange = event => {
        const iso = `${event.target.value} ${timezone}` 
        setDatetime(dtFromIso(iso))
    }

    const handleGuestNameChange = event => {
        const newGuestName = event.target.value
        localStorage.setItem('guestName', newGuestName)
        setGuestName(newGuestName)
    }

    const handleEnteredPasswordChange = event => {
        setEnteredPassword(event.target.value)
    }

    const handleInputDate = () => {
        const dateText = isoFromDt(datetime, timezone, true)
        const text = `[datetime]${dateText}[/datetime]\n`
        dispatch(insertIntoDraft(topicId, text))
        focusTextArea()
    }

    return (
        <>
            <TextInterface
                onButtonClick={onButtonClick}
                tags={tags}
                timezone={timezone}
                datetime={isoFromDt(datetime, timezone)}
                handleDatetimeChange={handleDatetimeChange}
                handleInputDate={handleInputDate}
                guestName={guestName} handleGuestNameChange={handleGuestNameChange}
                enteredPassword={enteredPassword} handleEnteredPasswordChange={handleEnteredPasswordChange}
                currentUserAttributes={currentUserAttributes}
                canPost={canPost} password={password}
                submitPassword={submitPassword}
            />
        </>
    )
}

export default TextInterfaceContainer