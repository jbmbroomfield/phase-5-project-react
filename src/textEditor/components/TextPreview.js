import bbCodeParsing from '../bbCode/BBCodeParsing.js'
import React from 'react'

const TextPreview = ({ text, bbCodeObjects}) => {
    
    const RenderTextPreview = () => (
        bbCodeParsing.parse(text, bbCodeObjects)
    )

    return (
        <div className="text-preview">
            <RenderTextPreview />  
        </div>
    )
}

export default TextPreview