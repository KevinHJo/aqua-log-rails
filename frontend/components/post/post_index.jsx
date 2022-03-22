import React from 'react';
import { useState, useEffect } from 'react';

const PostIndex = function(props) {
  const [firstPost] = useState(props.posts[0])
  const [values, setValues] = useState({
    body: "",
    author_id: props.currentUser.id
  })

  useEffect(() => {
    props.fetchPosts()
  }, [firstPost])

  const handleChange = function(field) {
    return e => {setValues((values) => ({
      ...values,
      [field]: e.target.value
    }))}
  }

  const handleSubmit = function(e) {
    e.preventDefault();
    props.createPost(values);
    setValues({
      body: "",
      author_id: props.currentUser.id
    })
  }

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

      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          value={values.body}
          placeholder='Create a post'
          onChange={handleChange('body')}
        />
      </form>
    </div>
  )
}


export default PostIndex


