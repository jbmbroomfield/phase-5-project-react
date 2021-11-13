import React from 'react'
import { Tag } from 'bbcode-to-react'
import BBCodeInsertion from '../BBCodeInsertion'

class StrikethroughTag extends Tag {

    static tag = 's'
    static value = 'strike'
    static title = 'Strikethrough'
    static insert = new BBCodeInsertion(`[${this.tag}]$1[/${this.tag}]`).insert

    toReact = () => {
        return (
            <strike>{this.getComponents()}</strike>
        )
    }
}

export default StrikethroughTag