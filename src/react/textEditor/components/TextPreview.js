import parse from 'bbCode/parse.js'
import React from 'react'

const TextPreview = ({ text, timezone }) => {
    
    const renderTextPreview = () => (
        parse(text, timezone)
    )

    return (
        <div className="text-preview">
            { renderTextPreview() }  
        </div>
    )
}

export default TextPreview