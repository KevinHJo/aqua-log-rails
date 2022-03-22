import React from 'react';
import { useState, useEffect } from 'react';

const PostIndex = function(props) {
  const [firstPost] = useState(props.posts[0])
  const [values, setValues] = useState({
    title: '',
    body: '',
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
      title: '',
      body: '',
      author_id: props.currentUser.id
    })
  }

  return (
    <div id='post-item-list-container'>
      <form onSubmit={handleSubmit} id='post-form'>
        <input id='post-form-title' type="text" value={values.title} placeholder='Title' onChange={handleChange('title')}/>
        <textarea
          id='post-form-input'
          value={values.body}
          placeholder='Create a post'
          onChange={handleChange('body')}
        />
        <input id='post-form-submit' type="submit" value='Create Post'/>
      </form>

      <ul id='post-item-list'>
        {props.posts.filter(post => post.parent_id === null).map(post => {
          return (
            <li key={`post-${post.id}`} className='post-item' onClick={() => props.history.push(`/forum/${post.id}`)}>
              <p className='post-item-username'>posted by {props.users[post.author_id].username}</p>
              <p className='post-item-title'>{post.title}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


export default PostIndex


