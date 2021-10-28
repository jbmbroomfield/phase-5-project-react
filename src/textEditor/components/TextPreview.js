import bbCodeParsing from '../bbCode/BBCodeParsing.js'
import React from 'react'

const TextPreview = props => (
    <div className="text-preview">
        {bbCodeParsing.parse(props.text, props.bbCodeObjects)}        
    </div>
)

export default TextPreview