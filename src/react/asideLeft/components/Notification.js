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
    object,
    subsectionSlug, topicSlug
}) => {

    const replies = () => number === 1 ? '1 new reply' : `${number} new replies`

    const objectAttributes = object ? object.attributes : {}

    const text = () => {

        switch(category) {

            case 'topic_replies':
                if (object) {
                    return `${objectAttributes.title} has ${replies()}.`
                } else {
                    return 'Topic not found.'
                }
            
            case 'topic_added_user':
                if (object) {
                    return `You have been added to ${objectAttributes.title}.`
                } else {
                    return 'Topic not found.'
                }
            
            case 'topic_added_viewer':
                if (object) {
                    return `You have been added to ${objectAttributes.title} as a viewer.`
                } else {
                    return 'Topic not found.'
                }
            
            case 'topic_added_poster':
                if (object) {
                    return `You have been added to ${objectAttributes.title} as a poster.`
                } else {
                    return 'Topic not found.'
                }

            default:
                return ''
        }
    }

    const history = useHistory()

    const goToTopic = () => {
        deleteNotification()
        setScrollId(tag)
        history.push(`/forum/${subsectionSlug}/${topicSlug}`)
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