import React from 'react'
import { connect } from 'react-redux'

import TextContainer from '../textEditor/containers/TextContainer'
import BottomBar from '../components/BottomBar'

import { createPost } from '../actions/postsActions'
import { setDraft, deleteDraft } from '../actions/draftsActions'

const TopicReplyContainer = ({
    match,
    bottomPopUp, setBottomPopUp,
    createPost,
    drafts, setDraft, deleteDraft,
    focusTextArea, textAreaRef,
}) => {
    
    const topicId = match && parseInt(match.params.topicId)
    const draft = drafts && drafts.find(draft => parseInt(draft.attributes.topic_id) === topicId)
    const text = draft ? draft.attributes.text : ''
    const selection = draft ? draft.attributes.selection : [0, 0]

    const setText = (text, selection) => setDraft(topicId, text, selection)

    const setSelection = selection => setDraft(topicId, text, selection)

    const handleButtonClick = insert => {
        const [nextText, nextSelectionStart, nextSelectionEnd] = insert(text, selection[0], selection[1])
        setText(nextText)
        setSelection([nextSelectionStart, nextSelectionEnd])
    }

    const handlePost = () => {
        createPost(topicId, text)
        setText('')
        setBottomPopUp(false)
    }
    
    const handleToggleClick = () => {
        setBottomPopUp(!bottomPopUp)
    }

    const RenderBottomBar = () => (
        <BottomBar
            toggleLabel="Reply"
            bottomPopUp={bottomPopUp}
            setBottomPopUp={setBottomPopUp}
            handlePost={handlePost}
            handleButtonClick={handleButtonClick}
            text={text}
            handleToggleClick={handleToggleClick}
            focusTextArea={focusTextArea}
        />
    )

    const RenderTextContainer = () => (
        bottomPopUp && (
            <TextContainer
                text={text}
                setText={setText}
                selection={selection}
                setSelection={setSelection}
                setBottomPopUp={setBottomPopUp}
                textAreaRef={textAreaRef}
            />
        )
    )

    return (
        <>
            <RenderBottomBar />
            <RenderTextContainer />
        </>
    )
}

const mapStateToProps = state => ({
    bottomPopUp: state.bottomPopUp,
    drafts: state.drafts
})

const mapDispatchToProps = dispatch => ({
    setDraft: (topicId, text, selection) => dispatch(setDraft(topicId, text, selection)),
    deleteDraft: topicId => dispatch(deleteDraft(topicId)),
    createPost: (topicId, text) => dispatch(createPost(topicId, text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicReplyContainer)