import reactParser from 'bbcode-to-react'
import { renderToString } from 'react-dom/server';
import htmlParse from 'html-react-parser'

import allTags from './tags/allTags';
import getDateTimeTag from './tags/getDateTimeTag';

// console.log(reactParser.tags)
reactParser.tags = {}

const parse = (text, timezone, tags = allTags) => {
    const DateTimeTag = getDateTimeTag(timezone)
    tags.push(DateTimeTag)
    for (const Tag of tags) {
        reactParser.registerTag(Tag.tag, Tag)
    }
    const parsedText = renderToString(reactParser.toReact(text)).replace(/\n/g, '<br />')
    return htmlParse(parsedText)
}

export default parse