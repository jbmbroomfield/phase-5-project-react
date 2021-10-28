import bbCodeParser from 'js-bbcode-parser'
import htmlParse from 'html-react-parser'

class BBCodeParsing {
    constructor(regexp, replacement) {
        this.regexp = regexp
        this.replacement = replacement
    }

    static parse = (text, bbCodeObjects) => {
        const safeText = BBCodeParsing.escapeHtml(text)
        console.log(bbCodeParser.codes)
        bbCodeParser.codes = [
            {
                regexp: /\n/gim,
                replacement: "<br>"
            }
        ]
        for (const bbCodeObject of bbCodeObjects) {
            let parsing = bbCodeObject.parsing
            if (!Array.isArray(parsing)) {
                parsing = [parsing]
            }
            for (const p of parsing) {
                bbCodeParser.codes.push({
                    regexp: p.regexp,
                    replacement: p.replacement
                })
            }
        }
        const parsedText = bbCodeParser.parse(safeText)
        return htmlParse(parsedText)
    }

    static escapeHtml = text => text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")

}

export default BBCodeParsing