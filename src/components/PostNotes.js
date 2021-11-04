import React from 'react'

const PostNotes = ({
    insertPostText,
    liked, disliked,
    createFlag, deleteFlag,
}) => {

    const handleLike = () => {
        liked ? deleteFlag('like') : createFlag('like')
    }

    const handleDislike = () => {
        disliked ? deleteFlag('dislike') : createFlag('dislike')
    }

    const renderLike = () => {
        const className = "fa fa-thumbs-up" + (liked ? " fa-thumbs-up-liked" : "")
        return <i className={className} onClick={handleLike}></i>
    }

    const renderDislike = () => {
        const className = "fa fa-thumbs-down" + (disliked ? " fa-thumbs-down-disliked" : "")
        return <i className={className} onClick={handleDislike}></i>
    }

    return (
        <div className="post-notes">
            <span className="thumbs">
                { renderLike() }
                { renderDislike() }
            </span>
            <button onClick={insertPostText}>Quote</button>
        </div>
    )
}

export default PostNotes