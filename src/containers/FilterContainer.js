import React from 'react'
import { useDispatch } from 'react-redux'
import Filter from '../components/Filter'

import { excludeAllUsers, includeAllUsers, toggleFlagFilter, toggleUserFilter } from '../actions/topicDisplaysActions'

const FilterContainer = ({
    topicDisplay,
    topic,
    displayFilter, toggleDisplayFilter,
}) => {

    const dispatch = useDispatch()

    const users = topic?.attributes.posters
    const userFilter = topicDisplay.users
    const flagFilter = topicDisplay.flags
    const topicSlug = topic?.attributes.slug
    
    const filterCaret = displayFilter ?  <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>

    return (
        <>
            <div
                className="aside-header btn"
                onClick={() => dispatch(toggleDisplayFilter())}
            > {filterCaret} Filter</div>
            { displayFilter && <Filter
                users={users}
                userFilter={userFilter} flagFilter={flagFilter}
                toggleUserFilter={user => dispatch(toggleUserFilter(topicSlug, user))}
                toggleFlagFilter={flag => dispatch(toggleFlagFilter(topicSlug, flag))}
                includeAllUsers={() => dispatch(includeAllUsers(topicSlug))}
                excludeAllUsers={() => dispatch(excludeAllUsers(topicSlug))}
            />}
        </>
    )
}

export default FilterContainer