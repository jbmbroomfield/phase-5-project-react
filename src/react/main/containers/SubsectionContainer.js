import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NewTopicContainer from '../../bottom/containers/NewTopicContainer'
import TopicSummary from '../components/TopicSummary'
import TopicSummaryHeader from '../components/TopicSummaryHeader'

import { fetchTopics, fetchTopic } from 'redux/actions/topicsActions'

import subsectionChannel from 'channels/subsectionChannel'
// import SubsectionLink from 'react/sharedComponents/SubsectionLink'
import { Link } from 'react-router-dom'
import { fetchSubsection } from 'redux/actions/subsectionsActions'


const SubsectionContainer = ({ 
    match,
}) => {

    const subsections = useSelector(state => state.subsections)
    let topics = useSelector(state => state.topics)

    const dispatch = useDispatch()

    const subsectionSlug = match.params.subsectionSlug
    const subsection = subsections.find(subsection => subsection.attributes.slug === subsectionSlug)
    const subsectionId = subsection && parseInt(subsection.id)
    topics = topics.filter(topic => topic.attributes.subsection_slug === subsectionSlug)
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
        dispatch(fetchSubsection(subsectionSlug))
        dispatch(fetchTopics(subsectionSlug))
        const fetchTopicFunction = (subsectionSlug, topicSlug) => dispatch(fetchTopic(subsectionSlug, topicSlug))
        return subsectionChannel(subsectionSlug, fetchTopicFunction)
    }, [dispatch, subsectionSlug])

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
            <br />
            <Link to='/'>
                Home
            </Link>
            {/* { subsection && <>{' > '}<SubsectionLink subsection={subsection} /></> } */}

            <h1>{subsection && subsection.attributes.title}</h1>
            <TopicSummaryHeader />
            { renderTopics() }
            { renderNewTopicContainer() }
        </>
    )
}

export default SubsectionContainer