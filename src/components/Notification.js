import React from 'react'
import { useHistory } from 'react-router'

const Notification = ({ category, objectId, number, createdAt, topics, deleteNotification }) => {

    const replies = () => number === 1 ? '1 new reply' : `${number} new replies`

    const text = () => {
        switch(category) {
            case 'replies':
                const topic = topics.find(topic => parseInt(topic.id) === objectId)
                if (topic) {
                    return `${topic.attributes.title} has ${replies()}.`
                } else {
                    return 'Topic not found.'
                } 
            default:
                return 'Unknown notification.'
        }
    }

    const history = useHistory()

    const goToTopic = () => {
        history.push(`/topics/${objectId}`)
    }

    return (
        <div>
            { text() }
            <i
               class="fa fa-arrow-right clickable"
               style={{color: 'green'}}
               onClick={goToTopic}
            ></i>
            <i
                className="fa fa-times clickable"
                style={{color: 'red'}}
                onClick={deleteNotification}
            ></i>
        </div>
    )
}

export default Notification