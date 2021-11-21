import React from 'react'
import { Tag } from 'bbcode-to-react'
import BBCodeInsertion from '../BBCodeInsertion'

import Quote from 'react/sharedComponents/Quote'

class QuoteTag extends Tag {

    static tag = 'quote'
    static value = 'quote'
    static title = 'Quote'
    static insert = new BBCodeInsertion(`[${this.tag}]$1[/${this.tag}]`).insert

    toReact = () => (
        <Quote text={this.getComponents()} author={this.params.author} />
    )
}

export default QuoteTag