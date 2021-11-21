import React from 'react'

const Quote = ({
    text,
    author,
}) => {

    const renderHeader = () => {
        if (author) {
            return <>Quote by {author}</>
        }
        return <>Quote</>
    }

    return (
        <>
            <div className="quote-header">{ renderHeader() }</div>
            <div className="quote">{text}</div>
        </>
    )
}

export default Quote