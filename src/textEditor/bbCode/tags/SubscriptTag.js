import React from 'react'
import { Tag } from 'bbcode-to-react'
import BBCodeInsertion from '../BBCodeInsertion'

class SubscriptTag extends Tag {

    static tag = 'sub'
    static value = 'subscript'
    static title = 'Subscript'
    static insert = new BBCodeInsertion(`[${this.tag}]$1[/${this.tag}]`).insert

    toReact = () => {
        return (
            <sub>{this.getComponents()}</sub>
        )
    }
}

export default SubscriptTag