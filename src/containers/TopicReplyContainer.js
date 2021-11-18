import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import TextContainer from '../textEditor/containers/TextContainer'
import BottomBar from '../components/BottomBar'

import { createPost } from '../actions/postsActions'
import { setDraft, deleteDraft } from '../actions/draftsActions'
import { updateSlug } from '../actions/topicsActions'

const TopicReplyContainer = ({
    match,
    bottomPopUp, setBottomPopUp,
    createPost,
    drafts, setDraft, deleteDraft,
    focusTextArea, textAreaRef,
    topics,
    currentUser,
    updateSlug,
}) => {

    const history = useHistory()

    const subsectionSlug = match.params.subsectionSlug
    // const subsection = subsections.find(subsection => subsection.attributes?.slug === subsectionSlug)
    const topicSlug = match.params.topicSlug
    const topic = topics.find(topic => {
        if (!topic.attributes) {
            return null
        }
        return topic.attributes.slug === topicSlug && topic.attributes.subsection_slug === subsectionSlug
    })
    const topicId = topic && parseInt(topic.id)
    const topicAttributes = topic ? topic.attributes : {}
    
    const draft = drafts && drafts.find(draft => parseInt(draft.attributes.topic_id) === topicId)
    const text = draft ? draft.attributes.text : ''
    const selection = draft ? draft.attributes.selection : [0, 0]

    const setText = (text, selection) => {
        setDraft(topicId, text, selection)
        focusTextArea({selection})
    }

    const setSelection = (selection, nextText) => {     
        setDraft(topicId, nextText || text, selection)}

    const handleButtonClick = insert => {
        const [nextText, nextSelectionStart, nextSelectionEnd] = insert(text, selection[0], selection[1])
        setText(nextText, [nextSelectionStart, nextSelectionEnd])
        // setSelection([nextSelectionStart, nextSelectionEnd], nextText)
    }

    const handlePost = () => {
        let then
        if (topicAttributes.status === 'unpublished') {
            then = post => {
                const newTopicSlug = post.attributes.topic_slug
                if (topicSlug !== newTopicSlug) {
                    updateSlug(topicSlug, newTopicSlug)
                    history.push(`/forum/${subsectionSlug}/${newTopicSlug}`)
                }
            }
        }
        createPost(subsectionSlug, topicSlug, text, then)
        setText('')
        setBottomPopUp(false)
    }
    
    const handleToggleClick = () => {
        bottomPopUp ? setBottomPopUp(false) : focusTextArea(draft)
    }

    const renderBottomBar = () => (
        <BottomBar
            toggleLabel="Reply"
            bottomPopUp={bottomPopUp}
            setBottomPopUp={setBottomPopUp}
            handlePost={handlePost}
            handleButtonClick={handleButtonClick}
            text={text}
            handleToggleClick={handleToggleClick}
            focusTextArea={focusTextArea}
            timezone={currentUser?.attributes.time_zone}
            topicId={topicId}
        />
    )

    const renderTextContainer = () => (
        bottomPopUp && (
            <TextContainer
                key="text-area"
                text={text}
                setText={setText}
                selection={selection}
                setSelection={setSelection}
                setBottomPopUp={setBottomPopUp}
                textAreaRef={textAreaRef}
                focusTextArea={focusTextArea}
            />
        )
    )

    return (
        <>
            { renderBottomBar() }
            { renderTextContainer() }
        </>
    )
}

const mapStateToProps = state => ({
    bottomPopUp: state.bottomPopUp,
    drafts: state.drafts,
    topics: state.topics,
    currentUser: state.currentUser,
})

const mapDispatchToProps = {
    setDraft,
    deleteDraft,
    createPost,
    updateSlug,
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicReplyContainer)