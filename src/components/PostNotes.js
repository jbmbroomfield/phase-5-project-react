import React from 'react'

const PostNotes = ({
    insertQuote,
    liked, disliked,
    likeCount, dislikeCount,
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
        return (
            <div>
                <i className={className} onClick={handleLike}></i>
                { Number.isInteger(likeCount) && likeCount > 0 && <span className='like-count'>({likeCount || 0})</span> }
            </div>
        )
    }

    const renderDislike = () => {
        const className = "fa fa-thumbs-down" + (disliked ? " fa-thumbs-down-disliked" : "")
        return (
            <div>
                <i className={className} onClick={handleDislike}></i>
                { Number.isInteger(dislikeCount) && dislikeCount > 0 && <span className='dislike-count'>({dislikeCount || 0})</span> }
            </div>
        )
    }

    return (
        <div className="post-notes">
            <span className="thumbs">
                { renderLike() }
                { renderDislike() }
            </span>
            <button onClick={insertQuote}>Quote</button>
        </div>
    )
}

export default PostNotes