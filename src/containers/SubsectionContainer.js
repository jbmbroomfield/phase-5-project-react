import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NewTopicContainer from './NewTopicContainer'

import { fetchCurrentUser } from '../actions/currentUserActions'
import { fetchSections } from '../actions/sectionsActions'
import { fetchSubsections } from '../actions/subsectionsActions'
import { fetchTopics } from '../actions/topicsActions'
import { fetchUsers } from '../actions/usersActions'

import AsideLeftContainer from './AsideLeftContainer'
import AsideRightContainer from './AsideRightContainer'

const SubsectionContainer = ({ 
    match,
    subsections,
    topics,
	fetchCurrentUser,
	fetchSections,
	fetchSubsections,
	fetchTopics,
	fetchUsers,
}) => {
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

	useEffect(() => {
		fetchCurrentUser()
		fetchSections()
		fetchSubsections()
		fetchTopics()
		fetchUsers()
	}, [
		fetchCurrentUser,
		fetchSections,
		fetchSubsections,
		fetchTopics,
		fetchUsers,
    ])

    return (
        <>
            <main>
                <h1>{subsection && subsection.attributes.title}</h1>
                {topics.map(topic => (
                    <div key={topic.id} className="topic">
                        <Link to={`/topics/${topic.id}`}>
                            {topic.attributes.title}
                        </Link>
                    </div>
                ))}
            </main>
            <AsideRightContainer />
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
	fetchTopics: () => dispatch(fetchTopics()),
	fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SubsectionContainer)