import React from 'react'
import { Tag } from 'bbcode-to-react'
import BBCodeInsertion from '../BBCodeInsertion'

class UnderlineTag extends Tag {

    static tag = 'u'
    static value = 'underline'
    static title = 'Underline (Ctrl-U)'
    static insert = new BBCodeInsertion(`[${this.tag}]$1[/${this.tag}]`).insert

    toReact = () => {
        return (
            <u>{this.getComponents()}</u>
        )
    }
}

export default UnderlineTag