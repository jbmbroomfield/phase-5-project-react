import React from 'react'
import { useHistory } from 'react-router'

const Notification = ({
    category,
    objectId,
    number,
    createdAt,
    tag,
    topics,
    deleteNotification,
    setScrollId,
    fetchTopic,
}) => {

    const replies = () => number === 1 ? '1 new reply' : `${number} new replies`

    const text = () => {
        switch(category) {
            case 'replies':
                const topic = topics.find(topic => parseInt(topic.id) === objectId)
                if (topic) {
                    return `${topic.attributes.title} has ${replies()}.`
                } else {
                    console.log(objectId)
                    fetchTopic(objectId)
                    return 'Topic not found.'
                } 
            default:
                return 'Unknown notification.'
        }
    }

    const history = useHistory()

    const goToTopic = () => {
        deleteNotification()
        setScrollId(tag)
        history.push(`/topics/${objectId}`)
    }

    const renderGreenArrow = () => (
        <i
            className="fa fa-arrow-right clickable"
            style={{color: 'green'}}
            onClick={goToTopic}
        ></i>
    )

    const renderRedX = () => (
        <i
            className="fa fa-times clickable"
            style={{color: 'red'}}
            onClick={deleteNotification}
        ></i>
    )

    return (
        <div className="notification">
            { text() }
            { renderGreenArrow() }
            { renderRedX() }      
        </div>
    )
}

export default Notification