import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import NewTopicContainer from './NewTopicContainer'
import TopicSummary from '../components/TopicSummary'
import TopicSummaryHeader from '../components/TopicSummaryHeader'

import { fetchTopics, fetchTopic } from '../actions/topicsActions'
import subsectionChannel from '../channels/subsectionChannel'

import { setScrollId } from '../actions/topicDisplayActions'

const SubsectionContainer = ({ 
    match,
    subsections,
    topics,
	fetchTopics, fetchTopic,
}) => {

    const subsectionSlug = match.params.subsectionSlug
    const subsection = subsections.find(subsection => subsection.attributes.slug === subsectionSlug)
    const subsectionId = subsection && parseInt(subsection.id)
    topics = topics.filter(topic => parseInt(topic.attributes.subsection_id) === parseInt(subsectionId))
    topics.sort((a, b) => b.attributes.last_post.attributes.created_at_i - a.attributes.last_post.attributes.created_at_i)

    const [displayTextArea, setDisplayTextArea] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [selection, setSelection] = useState([0, 0])

    const handleButtonClick = insert => {
        const [nextText, nextSelectionStart, nextSelectionEnd] = insert(text, selection[0], selection[1])
        setText(nextText)
        setSelection([nextSelectionStart, nextSelectionEnd])
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

const mapDispatchToProps = {
	fetchTopics,
	fetchTopic,
    setScrollId,
}

export default connect(mapStateToProps, mapDispatchToProps)(SubsectionContainer)