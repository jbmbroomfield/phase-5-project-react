import React from 'react'
import { Tag } from 'bbcode-to-react'
import { dtStringFromIso } from '../../../DateTime'

const GetDateTimeTag = timezone => {

    class DateTimeTag extends Tag {

        static tag = 'datetime'

        toReact = () => {
            console.log(timezone)
            const iso = this.getComponents()[0]
            return (
                <strong>{dtStringFromIso(iso, timezone)}</strong>
            )
        }
    }

    return DateTimeTag
}

export default GetDateTimeTag