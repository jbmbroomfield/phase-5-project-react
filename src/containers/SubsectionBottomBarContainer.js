import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import SubsectionBottomBar from '../components/SubsectionBottomBar'
import { createTopic } from '../actions/topicsActions'

const SubsectionBottomBarContainer = ({ match, currentUser, createTopic}) => {

    const history = useHistory(null)

    const subsectionSlug = match.params.subsectionSlug
    const username = currentUser?.attributes.username

    const redirect = topic => {
        history.push(`/forum/${subsectionSlug}/${topic.attributes.slug}`)
    }

    const handleNewTopic = () => {
        const title = `${username}'s New Thread`
        createTopic(subsectionSlug, title, redirect)
    }

    return (
        <>
            <SubsectionBottomBar handleNewTopic={handleNewTopic} />
        </>
    )
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
})

const mapDispatchToProps = {
    createTopic,
}

export default connect(mapStateToProps, mapDispatchToProps)(SubsectionBottomBarContainer)