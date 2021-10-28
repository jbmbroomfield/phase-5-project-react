import BBCodeDisplay from './BBCodeDisplay'
import BBCodeInsertion from './BBCodeInsertion'
import BBCodeParsing from './BBCodeParsing'

class BBCodeObject {

    constructor(value, title, bbCodeTag, htmlTag) {

        // /\[b\](.+?)\[\/b\]/gim

        this.display = new BBCodeDisplay(value, title)
        this.insertion = new BBCodeInsertion(`[${bbCodeTag}]$1[/${bbCodeTag}]`)
        const regexp1 = new RegExp(`\\[${bbCodeTag}\\](.+?)\\[/${bbCodeTag}\\]`, "gim")
        const regexp2 = new RegExp(`\\[${bbCodeTag}\\]\\[/${bbCodeTag}\\]`, "gim")
        this.parsing = [
            new BBCodeParsing(regexp1, `<${htmlTag}>$1</${htmlTag}>`),
            new BBCodeParsing(regexp2, `<${htmlTag}></${htmlTag}>`),
        ]
    }

}

export default BBCodeObject

const bold = new BBCodeObject('bold', 'Bold (Ctrl-B)', 'b', 'strong')

const italic = new BBCodeObject('italic', 'Italic (Ctrl-I)', 'i', 'em')

const underline = new BBCodeObject('underline', 'Underline (Ctrl-U)', 'u', 'u')

const strikethrough = new BBCodeObject('strike', 'Strikethrough', 's', 'strike')

const subscript = new BBCodeObject('subscript', 'Subscript', 'sub', 'sub')

const superscript = new BBCodeObject('superscript', 'SuperScript', 'sup', 'sup')

export const bbCodeObjects = [bold, italic, underline, strikethrough, subscript, superscript]


// CASES
// [b] | bold | [/b] => | bold |
// [b | ]bold[ | /b] => | bold |
// | [b]bold[/b] | => | bold |

// | b[b]ol[/b]d | => [b] | bold [/b]
// [b] | bold | c[/b] => | bold | [b]c[/b]

// [b]a | bold | c[/b] => [b]a[/b] | bold | [b]c[/b]
// [b] | bold | => [b] | bold | [/b]
// | bold | =>  [b] | bold | [/b]

// Starts and ends bold with no unbold => clear and unbold
// Starts and ends bold with some unbold => clear

// Starts bold, ends unbold => clear and bold
// Starts unbold, ends bold => clear and bold

// Starts unbold, ends unbold => clear and bold