import reactParser from 'bbcode-to-react'
import { renderToString } from 'react-dom/server';
import htmlParse from 'html-react-parser'

import allTags from './tags/allTags';

const parse = (text, tags = allTags) => {
    reactParser.tags = {}
    for (const Tag of tags) {
        reactParser.registerTag(Tag.tag, Tag)
    }
    const parsedText = renderToString(reactParser.toReact(text))
    return htmlParse(parsedText)
}

export default parse