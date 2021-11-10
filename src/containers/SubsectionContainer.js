import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'

import NewTopicContainer from './NewTopicContainer'
import TopicSummary from '../components/TopicSummary'
import TopicSummaryHeader from '../components/TopicSummaryHeader'

import { fetchCurrentUser } from '../actions/currentUserActions'
import { fetchSections } from '../actions/sectionsActions'
import { fetchSubsections } from '../actions/subsectionsActions'
import { fetchTopics, fetchTopic } from '../actions/topicsActions'
import { fetchUsers } from '../actions/usersActions'
import subsectionChannel from '../channels/subsectionChannel'

import { setScrollId } from '../actions/topicDisplayActions'

const SubsectionContainer = ({ 
    match,
    subsections,
    topics,
	fetchCurrentUser,
	fetchSections,
	fetchSubsections,
	fetchTopics, fetchTopic,
	fetchUsers,
}) => {

    const subsectionId = match.params.subsectionId
    const subsection = subsections.find(subsection => parseInt(subsection.id) === parseInt(subsectionId))
    topics = topics.filter(topic => parseInt(topic.attributes.subsection_id) === parseInt(subsectionId))
    topics.sort((a, b) => b.attributes.last_post.created_at_i - a.attributes.last_post.created_at_i)

    const [displayTextArea, setDisplayTextArea] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [selection, setSelection] = useState([0, 0])

    const handleButtonClick = insert => {
        const [nextText, nextSelectionStart, nextSelectionEnd] = insert(text, selection[0], selection[1])
        setText(nextText)
        setSelection([nextSelectionStart, nextSelectionEnd])
    }

    const history = useHistory()

    const goToPost = (topicId, tag) => {
        setScrollId(tag)
        history.push(`/topics/${topicId}`)
    }

    useEffect(() => {
        fetchTopics(subsectionId)
        return subsectionChannel(subsectionId, fetchTopic)
    }, [fetchTopics, subsectionId, fetchTopic])

    const renderTopics = () => (
        topics.map(topic => (
            <TopicSummary
                key={topic.id}
                topic={topic}
                postCount={topic.attributes.post_count}
                goToPost={goToPost}
            />
        ))
    )

    const renderNewTopicContainer = () => (
        <NewTopicContainer
            subsectionId={subsectionId}
            displayTextArea={displayTextArea}
            setDisplayTextArea={setDisplayTextArea}
            title={title}
            setTitle={setTitle}
            text={text}
            setText={setText}
            selection={selection}
            setSelection={setSelection}
            handleButtonClick={handleButtonClick}
        />
    )

    return (
        <>
            <h1>{subsection && subsection.attributes.title}</h1>
            <TopicSummaryHeader />
            { renderTopics() }
            { renderNewTopicContainer() }
        </>
    )
}

const mapStateToProps = state => ({
    subsections: state.subsections,
    topics: state.topics
})

const mapDispatchToProps = dispatch => ({
	fetchCurrentUser: () => dispatch(fetchCurrentUser()),
	fetchSections: () => dispatch(fetchSections()),
	fetchSubsections: () => dispatch(fetchSubsections()),
	fetchTopics: subsectionId => dispatch(fetchTopics(subsectionId)),
	fetchTopic: topicId => dispatch(fetchTopic(topicId)),
	fetchUsers: () => dispatch(fetchUsers()),
    setScrollId: id => dispatch(setScrollId(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SubsectionContainer)