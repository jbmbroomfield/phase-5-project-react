import React from 'react'

const PostNotes = ({
    insertQuote,
    liked, disliked,
    likeCount, dislikeCount,
    createFlag, deleteFlag,
    canPost,
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
            <span>
                <i className={className} onClick={handleLike}></i>
                { Number.isInteger(likeCount) && likeCount > 0 && <span className='like-count'>({likeCount || 0})</span> }
            </span>
        )
    }

    const renderDislike = () => {
        const className = "fa fa-thumbs-down" + (disliked ? " fa-thumbs-down-disliked" : "")
        return (
            <span>
                <i className={className} onClick={handleDislike}></i>
                { Number.isInteger(dislikeCount) && dislikeCount > 0 && <span className='dislike-count'>({dislikeCount || 0})</span> }
            </span>
        )
    }

    return (
        <div className="post-notes">
            { canPost && <span className="thumbs">
                { renderLike() }
                { renderDislike() }
            </span> }
            { canPost && <button onClick={insertQuote}>Quote</button> }
        </div>
    )
}

export default PostNotes