import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import TextInterface from '../../textEditor/components/TextInterface'

import { insertIntoDraft } from 'redux/actions/draftsActions'

import { dtFromIso, isoFromDt, now } from 'DateTime'

const TextInterfaceContainer = ({ onButtonClick, tags, timezone, topicId, focusTextArea }) => {

	const dispatch = useDispatch()

    const [datetime, setDatetime] = useState(now)

    const handleDatetimeChange = event => {
        const iso = `${event.target.value} ${timezone}` 
        setDatetime(dtFromIso(iso))
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
            />
        </>
    )
}

export default TextInterfaceContainer