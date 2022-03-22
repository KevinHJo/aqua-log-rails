import React from 'react';
import { useState, useEffect } from 'react';

const PostShow = function(props) {
  const [lastPost] = useState(props.posts[props.posts.length - 1])
  useEffect(() => {
    props.fetchPost(props.postId)
  }, [lastPost])

  return (
    <div id='post-item-list-container'>
      <ul id='post-item-list'>
        {props.posts.map(post => {
          return (
            <li key={`post-${post.id}`} className='post-item'>
              <p>{post.body}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


export default PostShow