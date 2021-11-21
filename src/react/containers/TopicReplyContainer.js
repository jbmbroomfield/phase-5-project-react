import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import TextContainer from '../textEditor/containers/TextContainer'
import BottomBar from '../components/BottomBar'

import { createPost } from 'redux/actions/postsActions'
import { setDraft } from 'redux/actions/draftsActions'
import { updateSlug } from 'redux/actions/topicsActions'

const TopicReplyContainer = ({
    match,
    setBottomPopUp,
    focusTextArea, textAreaRef,
}) => {

	const dispatch = useDispatch()

    const bottomPopUp = useSelector(state => state.bottomPopUp)
    const drafts = useSelector(state => state.drafts)
    const topics = useSelector(state => state.topics)
    const currentUser = useSelector(state => state.currentUser)
    
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
        dispatch(setDraft(topicId, text, selection))
        focusTextArea({selection})
    }

    const setSelection = (selection, nextText) => {     
        dispatch(setDraft(topicId, nextText || text, selection))
    }

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
                    dispatch(updateSlug(topicSlug, newTopicSlug))
                    history.push(`/forum/${subsectionSlug}/${newTopicSlug}`)
                }
            }
        }
        dispatch(createPost(subsectionSlug, topicSlug, text, then))
        setText('')
        setBottomPopUp(false)
    }
    
    const handleToggleClick = () => {
        bottomPopUp ? setBottomPopUp(false) : focusTextArea(draft)
    }

    const renderBottomBar = () => (
        topicAttributes.can_post ? <BottomBar
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
        /> : <div className="bottom-bar"></div>
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

export default TopicReplyContainer