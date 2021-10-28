class BBCodeInsertion {
    constructor(pattern) {
        this.pattern = pattern;
        [this.startTag, this.endTag] = pattern.split('$1')
        this.maxTagLength = Math.max(this.startTag.length, this.endTag.length)
    }

    insert = (text, selectionStart, selectionEnd) => {
        let beginning = text.slice(0, selectionStart)
        let middle = text.slice(selectionStart, selectionEnd)
        let end = text.slice(selectionEnd);


        [beginning, middle, end] = this.correctForSelectionsInsideTags(beginning, middle, end);

        [beginning, middle, end] = this.doInsertion(beginning, middle, end)

        beginning = this.clearBackToBackTags(beginning)
        middle = this.clearBackToBackTags(middle)
        end = this.clearBackToBackTags(end)

        const nextText = beginning + middle + end
        const nextSelectionStart = beginning.length
        const nextSelectionEnd = nextSelectionStart + middle.length 
        

        return [nextText, nextSelectionStart, nextSelectionEnd]
    }

    doInsertion = (beginning, middle, end) => {

        const lastStartTagInBeginning = beginning.lastIndexOf(this.startTag)
        const lastEndTagInBeginning = beginning.lastIndexOf(this.endTag)

        const middleStartsInTags = lastStartTagInBeginning > lastEndTagInBeginning

        const lastStartTagInMiddle = middle.lastIndexOf(this.startTag)
        const lastEndTagInMiddle = middle.lastIndexOf(this.endTag)
        const middleEndsInTags = lastStartTagInMiddle > lastEndTagInMiddle || (middleStartsInTags && lastEndTagInMiddle === -1)

        if (middleStartsInTags) {
            return this.doInsertionStartingInTags(beginning, middle, end, middleEndsInTags)
        }
        return this.doInsertionNotStartingInTags(beginning, middle, end, middleEndsInTags)
    }

    doInsertionStartingInTags = (beginning, middle, end, middleEndsInTags) => {
        
        const firstEndTagInMiddle = middle.indexOf(this.endTag)
        middle = this.clearTags(middle)
        if (middleEndsInTags) {
            if (firstEndTagInMiddle === -1) {
                beginning += this.endTag
                end = this.startTag + end
            }
        } else {
            end = this.endTag + end
        }
        return [beginning, middle, end]
    }

    doInsertionNotStartingInTags = (beginning, middle, end, middleEndsInTags) => {
        if (middleEndsInTags) {
            middle = this.clearTags(middle)
            beginning += this.startTag
        } else {
            middle = this.clearTags(middle)
            beginning += this.startTag
            end = this.endTag + end
        }
        return [beginning, middle, end]
    }

    clearTags(text) {
        return text.replace(this.startTag, '').replace(this.endTag, '')
    }

    clearBackToBackTags(text) {
        return text.replace(this.endTag + this.startTag, '').replace(this.startTag + this.endTag, '')
    }

    correctForSelectionsInsideTags(beginning, middle, end) {
        [beginning, middle] = this.correctForSelectionStartInsideTag(beginning, middle);
        [middle, end] = this.correctForSelectionEndInsideTag(middle, end)
        return [beginning, middle, end]
    }

    correctForSelectionStartInsideTag(beginning, middle) {
        for (let i = 0; i < this.maxTagLength; i++) {
            const newBeginning = beginning + middle.slice(0, i)
            const newMiddle = middle.slice(i)
            if (
                (newBeginning.endsWith(this.startTag) && i < this.startTag.length) ||
                (newBeginning.endsWith(this.endTag) && i < this.endTag.length)
            ) {
                return [newBeginning, newMiddle]
            }
        }
        return [beginning, middle]
    }

    correctForSelectionEndInsideTag(middle, end) {
        for (let i = 1; i <= this.maxTagLength; i++) {
            const newMiddle = i === 0 ? '' : middle.slice(0, -i)
            const newEnd = middle.slice(-i) + end
            if (
                (newEnd.startsWith(this.startTag) && i < this.startTag.length) ||
                (newEnd.startsWith(this.endTag) && i < this.endTag.length)
            ) {
                return [newMiddle, newEnd]
            }
        }
        return [middle, end]
    }
}

export default BBCodeInsertion