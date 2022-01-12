import React from 'react'

const PageControl = ({
    pages, page, setPage,
    textEmpty,
}) => {
    return (
        <div className="aside-header page-control">
            <div>Page {page}</div>
            <span
                className="btn btn-page-control"
                onClick={() => setPage(1)}
            >1</span>
            <i
                className="fa fa-chevron-left btn btn-page-control"
                onClick={() => setPage(page - 1)}
            ></i>
            <textarea
                className="page-control-input"
                value={textEmpty ? "" : page.toString()}
                placeholder={page.toString()}
                onChange={event => setPage(event.target.value)}
                rows={1}
                cols={pages.toString().length}
            />
            <i
                className="fa fa-chevron-right btn btn-page-control"
                onClick={() => {
                    setPage(page + 1)
                }}
            ></i>
            <span
                className="btn btn-page-control"
                onClick={() => setPage(pages)}
            >{pages}</span>
        </div>
    )
}

export default PageControl