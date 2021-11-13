import React from 'react'
import { Tag } from 'bbcode-to-react'
import BBCodeInsertion from '../BBCodeInsertion'

class BoldTag extends Tag {

    static tag = 'b'
    static value = 'bold'
    static title = 'Bold (Ctrl-B)'
    static insert = new BBCodeInsertion(`[${this.tag}]$1[/${this.tag}]`).insert

    toReact = () => {
        return (
            <strong>{this.getComponents()}</strong>
        )
    }
}

export default BoldTag