import React from 'react';
import { useState, useEffect } from 'react';

const PostShow = function(props) {
  const [lastPost] = useState(props.posts[props.posts.length - 1])
  useEffect(() => {
    props.fetchPost(props.postId)
  }, [lastPost])

  let originalPost;
  if (props.posts[0]) {
    originalPost = props.posts.shift();
  } else {
    originalPost = {title: "Loading", body: "Loading"};
  }
  
  let originalPoster;
  if (props.users[originalPost.author_id]) {
    originalPoster = props.users[originalPost.author_id]
  } else {
    originalPoster = {username: "On my way!"}
  }

  return (
    <div id='post-item-list-container'>
      <div id='original-post'>
        <p className='post-item-username'>posted by {originalPoster.username}</p>
        <p className='post-item-title'>{originalPost.title}</p>
        <p className='post-item-body'>{originalPost.body}</p>
      </div>

      <ul id='post-item-list'>
        {props.posts.map(post => {
          return (
            <li key={`post-${post.id}`} className='post-item'>
              <p className='post-item-username'>{props.users[post.author_id].username}</p>
              <p className='post-item-body'>{post.body}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


export default PostShow