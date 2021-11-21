import React from 'react'
import { Tag } from 'bbcode-to-react'
import BBCodeInsertion from '../BBCodeInsertion'

class ItalicsTag extends Tag {

    static tag = 'i'
    static value = 'italic'
    static title = 'Italic (Ctrl-I)'
    static insert = new BBCodeInsertion(`[${this.tag}]$1[/${this.tag}]`).insert

    toReact = () => {
        return (
            <em>{this.getComponents()}</em>
        )
    }
}

export default ItalicsTag