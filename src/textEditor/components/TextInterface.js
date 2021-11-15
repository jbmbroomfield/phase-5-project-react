import React from 'react'
import TextInterfaceButton from './TextInterfaceButton'
import TextInterfaceGroup from './TextInterfaceGroup'

const TextInterface = ({ onButtonClick, tags }) => {

    const buttons = tags.map((tag, index) => {
        return <TextInterfaceButton key={index} onClick={onButtonClick} tag={tag} />
    })

    const onDateChange = event => {
        console.log(event.target.value)
    }

    return (
        <>
            <div className="sceditor-toolbar" unselectable="on">
                <TextInterfaceGroup buttons={buttons} />
            </div>
            <input type="datetime-local" onChange={onDateChange} value="2021-11-15T20:20" />
            <span>Input Date</span>
        </>
    )
}

export default TextInterface