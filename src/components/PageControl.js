import React from 'react'

const PageControl = ({
    pages,
    text, handleTextChange,
    handleFirstPage, handleLastPage,
    handlePageUp, handlePageDown,
}) => {

    return (
        <div className="aside-header page-control">
            <span
                className="btn btn-page-control"
                onClick={handleFirstPage}
            >1</span>
            <i
                className="fa fa-chevron-left btn btn-page-control"
                onClick={handlePageDown}
            ></i>
            <textarea
                className="page-control-input"
                value={text}
                onChange={handleTextChange}
                rows={1}
                cols={pages.toString().length}
            />
            <i
                className="fa fa-chevron-right btn btn-page-control"
                onClick={handlePageUp}
            ></i>
            <span
                className="btn btn-page-control"
                onClick={handleLastPage}
            >{pages}</span>
        </div>
    )
}

export default PageControl