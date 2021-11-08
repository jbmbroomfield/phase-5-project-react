import React from 'react'
import { connect } from 'react-redux'
import Filter from '../components/Filter'

import { includeUser, excludeUser } from '../actions/topicDisplayActions'

const FilterContainer = ({
    topicDisplay,
    topic,
    includeUser, excludeUser
}) => {

    const users = topic?.attributes.posters
    const userFilter = topicDisplay.users

    return (
        <>
            <div className="aside-header">Filter</div>
            <Filter
                users={users}
                userFilter={userFilter}
                includeUser={includeUser}
                excludeUser={excludeUser}
            />
        </>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    includeUser: user => dispatch(includeUser(user)),
    excludeUser: user => dispatch(excludeUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)