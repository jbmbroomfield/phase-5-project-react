import React, { useState } from 'react'
import { connect } from 'react-redux'

import PageControl from '../components/PageControl'

import { setPage } from '../actions/topicDisplayActions'

const PageControlContainer = ({
    topicDisplay,
    setPageDispatch,
}) => {
    const pages = 500
    const page = topicDisplay.page
    const [textEmpty, setTextEmpty] = useState(false)

    const setPage = newPage => {
        if (typeof newPage === 'string') {
            newPage = newPage.replace(/\D/g, "")
            if (newPage.length === 0) {
                setTextEmpty(true)
                return
            }
            setTextEmpty(false)
            newPage = parseInt(newPage)
        } 
        setTextEmpty(false)
        if (newPage !== page && (newPage >= 1 || newPage <= pages)) {
            setPageDispatch(newPage)
        }
    }

    return (
        <PageControl 
            pages={pages}
            page={page}
            setPage={setPage}
            textEmpty={textEmpty}
        />
    )
}

const mapStateToProps = state => ({
    topicDisplay: state.topicDisplay,
})

const mapDispatchToProps = dispatch => ({
    setPageDispatch: page => dispatch(setPage(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageControlContainer)