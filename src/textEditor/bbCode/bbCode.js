import bbCodeParser from 'js-bbcode-parser'
import htmlParse from 'html-react-parser'

const escapeHtml = text => text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

const newCodes = [
    {
        regexp: /\n/gim,
        replacement: "<br>"
    },
    {
        regexp:  /\[b\](.+?)*\[\/b\]/gim,
        replacement: "<strong>$1</strong>"
    },

]

bbCodeParser.codes.push(...newCodes)

export class bbCodeParserGame {
    static codes = [
        {
            regexp: /\n/gim,
            replacement: "<br>"
        },
        {
            regexp:  /\[b\]\[\/b\]/gim,
            replacement: "<strong></strong>"
        },
        {
            regexp:  /\[b\](.+?)\[\/b\]/gim,
            replacement: "<strong>$1</strong>"
        },
        {
            regexp:  /\[i\](.+?)\[\/i\]/gim,
            replacement: "<em>$1</em>"
        },
        {
            regexp:  /\[u\](.+?)\[\/u\]/gim,
            replacement: "<u>$1</u>"
        },
    ]

    static parse(text) {
        const safeText = escapeHtml(text)
        bbCodeParser.codes = this.codes
        const bbCodeText = bbCodeParser.parse(safeText)
        return htmlParse(bbCodeText)
    }
}


// [
//     ["b", "strong"],
//     ["i", "em"],
//     ["u", "u"],
//     ["list", "ul"]
// ]

// [
//     [ /\[b\](.+?)\[\/b\]/gim,                         "<strong>$1</strong>" ],
//     [ /\[i\](.+?)\[\/i\]/gim,                         "<em>$1</em>" ],
//     [ /\[u\](.+?)\[\/u\]/gim,                         "<u>$1</u>" ],
//     [ /\[list\](.+?)\[\/list\]/gim,                   "<ul>$1</ul>" ],
//     [ /\[\*\](.+?)\[\/\*\]/gim,                       "<li>$1</li>" ],
//     [ /\n/gim,                                        "<br>" ],
// ]

// [
//     [ /\[color=(.+?)\](.+?)\[\/color\]/gim,           "<span style=\"color:$1\">$2</span>" ],
//     [ /\[size=([0-9]+)\](.+?)\[\/size\]/gim,          "<span style=\"font-size:$1px\">$2</span>" ],
//     [ /\[img\](.+?)\[\/img\]/gim,                     "<img src=\"$1\">" ],
//     [ /\[img=(.+?)\]/gim,                             "<img src=\"$1\">" ],
//     [ /\[email\](.+?)\[\/email\]/gim,                 "<a href=\"mailto:$1\">$1</a>" ],
//     [ /\[email=(.+?)\](.+?)\[\/email\]/gim,           "<a href=\"mailto:$1\">$2</a>" ],
//     [ /\[url\](.+?)\[\/url\]/gim,                     "<a href=\"$1\">$1</a>" ],
//     [ /\[url=(.+?)\|onclick\](.+?)\[\/url\]/gim,      "<a onclick=\"$1\">$2</a>" ],
//     [ /\[url=(.+?)\starget=(.+?)\](.+?)\[\/url\]/gim, "<a href=\"$1\" target=\"$2\">$3</a>" ],
//     [ /\[url=(.+?)\](.+?)\[\/url\]/gim,               "<a href=\"$1\">$2</a>" ],
//     [ /\[a=(.+?)\](.+?)\[\/a\]/gim,                   "<a href=\"$1\" name=\"$1\">$2</a>" ],

// ]

// [
//     [ /\[h1\](.+?)\[\/h1\]/gim,                       "<h1>$1</h1>" ],
//     [ /\[h2\](.+?)\[\/h2\]/gim,                       "<h2>$1</h2>" ],
//     [ /\[h3\](.+?)\[\/h3\]/gim,                       "<h3>$1</h3>" ],
//     [ /\[h4\](.+?)\[\/h4\]/gim,                       "<h4>$1</h4>" ],
//     [ /\[h5\](.+?)\[\/h5\]/gim,                       "<h5>$1</h5>" ],
//     [ /\[h6\](.+?)\[\/h6\]/gim,                       "<h6>$1</h6>" ],
//     [ /\[p\](.+?)\[\/p\]/gim,                         "<p>$1</p>" ],
//     [ /\[br\]/gim ,                                   "<br>" ],
// ]


const bbCode = text => {
    const safeText = escapeHtml(text)
    const bbCodeText = bbCodeParser.parse(safeText)
    return htmlParse(bbCodeText)
}

export default bbCode