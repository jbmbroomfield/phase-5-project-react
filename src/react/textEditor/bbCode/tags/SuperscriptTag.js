import React from 'react'
import { Tag } from 'bbcode-to-react'
import BBCodeInsertion from '../BBCodeInsertion'

class SuperscriptTag extends Tag {

    static tag = 'sup'
    static value = 'superscript'
    static title = 'Superscript'
    static insert = new BBCodeInsertion(`[${this.tag}]$1[/${this.tag}]`).insert

    toReact = () => {
        return (
            <sup>{this.getComponents()}</sup>
        )
    }
}

export default SuperscriptTag