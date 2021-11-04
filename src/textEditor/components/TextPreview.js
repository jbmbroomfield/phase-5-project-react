import bbCodeParsing from '../bbCode/BBCodeParsing.js'
import React from 'react'

const TextPreview = ({ text, bbCodeObjects}) => {
    
    const renderTextPreview = () => (
        bbCodeParsing.parse(text, bbCodeObjects)
    )

    return (
        <div className="text-preview">
            { renderTextPreview() }  
        </div>
    )
}

export default TextPreview