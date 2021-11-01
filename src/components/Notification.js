import React from 'react'

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

    return (
        <div>
            { text() }
            <i
                className="fa fa-times clickable"
                style={{color: 'red'}}
                onClick={deleteNotification}
            ></i>
        </div>
    )
}

export default Notification