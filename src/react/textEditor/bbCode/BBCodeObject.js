// import BBCodeDisplay from './BBCodeDisplay'
// import BBCodeInsertion from './BBCodeInsertion'
// import parse from './parse'
// import React from 'react'

// import BoldTag from './tags/BoldTag'
// import UnderlineTag from './tags/UnderlineTag'
// import ItalicsTag from './tags/ItalicsTag'

// class BBCodeObject {

//     constructor(tag, value, title) {

//         // /\[b\](.+?)\[\/b\]/gim
//         // this.tag = tag
//         // this.display = new BBCodeDisplay(value, title)
//         // this.insertion = new BBCodeInsertion(`[${bbCodeTag}]$1[/${bbCodeTag}]`)
//         // const regexp1 = new RegExp(`\\[${bbCodeTag}\\](.+?)\\[/${bbCodeTag}\\]`, "gim")
//         // const regexp2 = new RegExp(`\\[${bbCodeTag}\\]\\[/${bbCodeTag}\\]`, "gim")
//         // this.parsing = [
//         //     new BBCodeParsing(regexp1, `<${htmlTag}>$1</${htmlTag}>`),
//         //     new BBCodeParsing(regexp2, `<${htmlTag}></${htmlTag}>`),
//         // ]
//     }

// }

// export default BBCodeObject


// const quoteRegex1 = /\[quote\](.+?)\[\/quote\]/gim
// const quoteReplacement1 = 'Quote:<br /><span class="quote">$1</span>'


// const quoteRegex2 = /\[quote author=(.+?)\](.+?)\[\/quote\]/gim
// const quoteReplacement2 = 'Quote by $1:<br /><span class="quote">$2</span>'

// // {regexp: /\[color=(.+?)\](.+?)\[\/color\]/gim, replacement: "<span style=\"color:$1\">$2</span>"}
// const quote = {
//     display: new BBCodeDisplay('quote', 'quote'),
//     parsing: [
//         // new BBCodeParsing(quoteRegex1, quoteReplacement1),
//         // new BBCodeParsing(quoteRegex2, quoteReplacement2),
//     ],
// }


// const TestComponent = () => {
//     return (
//         <span>
//             Hi
//         </span>
//     )
// }


// const testRegex = /\[test\](.+?)\[\/test\]/gim
// const testReplacement = `${<TestComponent />}`

// const test = {
//     display: new BBCodeDisplay('test', 'test'),
//     parsing: [
//         // new BBCodeParsing(testRegex, testReplacement),
//     ]
// }

// export const bbCodeObjects = [bold, italic, underline, strikethrough, subscript, superscript, quote, test]


// // CASES
// // [b] | bold | [/b] => | bold |
// // [b | ]bold[ | /b] => | bold |
// // | [b]bold[/b] | => | bold |

// // | b[b]ol[/b]d | => [b] | bold [/b]
// // [b] | bold | c[/b] => | bold | [b]c[/b]

// // [b]a | bold | c[/b] => [b]a[/b] | bold | [b]c[/b]
// // [b] | bold | => [b] | bold | [/b]
// // | bold | =>  [b] | bold | [/b]

// // Starts and ends bold with no unbold => clear and unbold
// // Starts and ends bold with some unbold => clear

// // Starts bold, ends unbold => clear and bold
// // Starts unbold, ends bold => clear and bold

// // Starts unbold, ends unbold => clear and bold