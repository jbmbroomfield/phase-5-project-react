import parse from '../bbCode/parse.js'
import React from 'react'

const TextPreview = ({ text }) => {
    
    const renderTextPreview = () => (
        parse(text)
    )

    return (
        <div className="text-preview">
            { renderTextPreview() }  
        </div>
    )
}

export default TextPreview