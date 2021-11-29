import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Notification from '../components/Notification'

import { fetchTopic } from 'redux/actions/topicsActions'

const NotificationContainer = ({
    objectId,
    number,
    createdAt,
    tag,
    notification,
    deleteNotification,
    setScrollId,
}) => {

    const dispatch = useDispatch()

    const topics = useSelector(state => state.topics)

    const notificationAttributes = notification ? notification.attributes : {}

    let objectType, topicSlug, subsectionSlug
    let object

    if (notificationAttributes.category?.slice(0, 6) === 'topic_') {
        objectType = 'topic'
        topicSlug = notificationAttributes.slug
        subsectionSlug = notificationAttributes.superslug
        object = topics.find(topic => (
            topic.attributes.subsection_slug === subsectionSlug && topic.attributes.slug === topicSlug
        ))
    }

    useEffect(() => {
        if (objectType === 'topic') {
            dispatch(fetchTopic(subsectionSlug, topicSlug))
        }
    }, [dispatch, objectType, subsectionSlug, topicSlug])

    return <Notification
        key={notification.id}
        category={notificationAttributes.category}
        objectId={parseInt(notificationAttributes.object_id)}
        number={notificationAttributes.number}
        createdAt={notificationAttributes.createdAt}
        tag={notificationAttributes.tag}
        topics={topics}
        deleteNotification={deleteNotification}
        setScrollId={setScrollId}
        fetchTopic={fetchTopic}
        object={object}
        subsectionSlug={subsectionSlug}
        topicSlug={topicSlug}
    />

}

export default NotificationContainer