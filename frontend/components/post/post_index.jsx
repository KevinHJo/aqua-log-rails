import React from 'react';
import { useState, useEffect } from 'react';

const PostIndex = function(props) {
  const [firstPost] = useState(props.posts[0])
  useEffect(() => {
    props.fetchPosts()
  }, [firstPost])

  return (
    <div id='post-item-list-container'>
      <ul id='post-item-list'>
        {props.posts.map(post => {
          return (
            <li key={`post-${post.id}`} className='post-item' onClick={() => props.history.push(`/forum/${post.id}`)}>
              <p className='post-item-username'>{props.users[post.author_id].username}</p>
              <p className='post-item-body'>{post.body}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


export default PostIndex


