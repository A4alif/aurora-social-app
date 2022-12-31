import React from 'react'
import './post.css';
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({post}) => {
  return (
    <>
        <div className="post">
            <img src={post.img} alt="" />
            <div className='postReact'>
                <img src={post.liked? Heart : NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span>{post.likes} Likes</span>
            <div className="detail">
                <span>{post.name}</span>
                <span> {post.desc}</span>
            </div>
        </div>
    </>
  )
}

export default Post