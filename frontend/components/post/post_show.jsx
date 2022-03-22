import React from 'react';
import { useState, useEffect } from 'react';

const PostShow = function(props) {
  let originalPost;
  if (props.posts[0]) {
    originalPost = props.posts[0];
  } else {
    originalPost = {id: 0, title: "Loading", body: "Loading"};
  }
  
  const [lastPost] = useState(props.posts[props.posts.length - 1])
  const [values, setValues] = useState({
    body: '',
    author_id: props.currentUser.id,
    parent_id: originalPost.id
  })

  useEffect(() => {
    props.fetchPost(props.postId)
  }, [lastPost])
  
  let originalPoster;
  if (props.users[originalPost.author_id]) {
    originalPoster = props.users[originalPost.author_id]
  } else {
    originalPoster = {username: "On my way!"}
  }

  const handleSubmit = function(e) {
    e.preventDefault();
    props.createPost(values);
    setValues({
      body: '',
      author_id: props.currentUser.id,
      parent_id: originalPost.id
    })
  }

  const handleChange = function(e) {
    setValues((values) => ({
        ...values,
        body: e.target.value
      })
    )
  }

  return (
    <div id='post-item-list-container'>
      <div id='original-post'>
        <p className='post-item-username'>posted by {originalPoster.username}</p>
        <p className='post-item-title'>{originalPost.title}</p>
        <p className='post-item-body'>{originalPost.body}</p>
      </div>

      <ul id='post-item-list'>
        <form onSubmit={handleSubmit} id='post-show-form'>
          <textarea
            id='post-form-input'
            value={values.body}
            placeholder='What are your thoughts?'
            onChange={handleChange}
          />
          <input id='post-form-submit' type="submit" value='Comment'/>
        </form>

        {props.posts.slice(1).map(post => {
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