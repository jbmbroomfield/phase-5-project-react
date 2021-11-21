import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import PageControl from '../components/PageControl'

import { setPage } from '../../actions/topicDisplaysActions'

const PageControlContainer = ({
    topicDisplay,
    page, pages,
}) => {

	const dispatch = useDispatch()
    
    const [textEmpty, setTextEmpty] = useState(false)

    const handlePageChange = newPage => {
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
        if (newPage !== page && newPage >= 1 && newPage <= pages) {
            dispatch(setPage(topicDisplay.slug, newPage))
        }
    }

    return (
        <PageControl 
            pages={pages}
            page={page}
            setPage={handlePageChange}
            textEmpty={textEmpty}
        />
    )
}

export default PageControlContainer