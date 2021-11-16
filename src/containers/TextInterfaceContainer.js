import React, { useState } from 'react'
import { connect } from 'react-redux'

import TextInterface from '../textEditor/components/TextInterface'

import { insertIntoDraft } from '../actions/draftsActions'
import { dtFromIso, isoFromDt, now } from '../DateTime'

const TextInterfaceContainer = ({ onButtonClick, tags, timezone, insertIntoDraft, topicId, focusTextArea }) => {

    const [datetime, setDatetime] = useState(now)

    const handleDatetimeChange = event => {
        const iso = `${event.target.value} ${timezone}` 
        setDatetime(dtFromIso(iso))
    }

    const handleInputDate = () => {
        const dateText = isoFromDt(datetime, timezone, true)
        const text = `[datetime]${dateText}[/datetime]\n`
        insertIntoDraft(topicId, text)
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

const mapDispatchToProps = {
    insertIntoDraft,
}

export default connect(null, mapDispatchToProps)(TextInterfaceContainer)