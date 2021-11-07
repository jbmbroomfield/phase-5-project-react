import React, { useState } from 'react'

import PageControl from '../components/PageControl'

const PageControlContainer = () => {
    const pages = 500

    const [text, setText] = useState('1')
    const [page, setPage] = useState(parseInt(text))

    const setPageFromText = (newText) => {
        if (text.length > 0) {
            setPage(parseInt(newText))
        } 
    }

    const handleTextChange = event => {
        let newText = event.target.value.replace(/\D/g, "")
        if (newText.length === 0 || parseInt(newText) <= pages) {
            setText(newText)
            setPageFromText(newText)
        }
    }

    const handleFirstPage = () => {
        setText("1")
        setPage(1)
    }

    const handleLastPage = () => {
        setText(pages.toString())
        setPage(pages)
    }

    const handlePageUp = () => {
        if (page < pages) {
            setText((page + 1).toString())
            setPage(page + 1)
        }
    }

    const handlePageDown = () => {
        if (page > 1) {
            setText((page - 1).toString())
            setPage(page - 1)
        }
    }

    return (
        <PageControl 
            pages={pages}
            text={text}
            handleTextChange={handleTextChange}
            handleFirstPage={handleFirstPage}
            handleLastPage={handleLastPage}
            handlePageUp={handlePageUp}
            handlePageDown={handlePageDown}
        />
    )
}

export default PageControlContainer