import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NewTopicContainer from './NewTopicContainer'
import BottomPadding from '../components/BottomPadding'

const SubsectionContainer = ({ match, subsections, topics }) => {
    const subsectionId = match.params.subsectionId
    const subsection = subsections.find(subsection => parseInt(subsection.id) === parseInt(subsectionId))
    topics = topics.filter(topic => parseInt(topic.attributes.subsection_id) === parseInt(subsectionId))

    const [displayTextArea, setDisplayTextArea] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [selection, setSelection] = useState([0, 0])

    const handleButtonClick = insert => {
        const [nextText, nextSelectionStart, nextSelectionEnd] = insert(text, selection[0], selection[1])
        setText(nextText)
        setSelection([nextSelectionStart, nextSelectionEnd])
    }

    return (
        <div>
            <h1>Subsection - {subsection && subsection.attributes.title}</h1>
            {topics.map(topic => (
                <p key={topic.id}>
                    <Link to={`/topics/${topic.id}`}>
                        {topic.attributes.title}
                    </Link>
                </p>
            ))}
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
            <BottomPadding displayTextArea={displayTextArea} />
        </div>
    )
}

const mapStateToProps = state => ({
    subsections: state.subsections,
    topics: state.topics
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SubsectionContainer)