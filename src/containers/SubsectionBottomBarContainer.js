import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import SubsectionBottomBar from '../components/SubsectionBottomBar'
import { createTopic } from '../actions/topicsActions'

const SubsectionBottomBarContainer = ({ match }) => {

	const dispatch = useDispatch()

    const currentUser = useSelector(state => state.currentUser)
    
    const history = useHistory(null)

    const subsectionSlug = match.params.subsectionSlug
    const username = currentUser?.attributes.username

    const redirect = topic => {
        history.push(`/forum/${subsectionSlug}/${topic.attributes.slug}`)
    }

    const handleNewTopic = () => {
        const title = `${username}'s New Thread`
        dispatch(createTopic(subsectionSlug, title, redirect))
    }

    return currentUser ? <SubsectionBottomBar handleNewTopic={handleNewTopic} /> : <div className="bottom-bar"></div>
}

export default SubsectionBottomBarContainer