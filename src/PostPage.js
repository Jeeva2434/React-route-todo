import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({post}) => {
  const {id} = useParams();
  const posts = post.find(post => (post.id).toString() === id)
  return (
    <>
    <div>PostPage {id}</div>
    <div>
      {
        post && 
        <>
          <div>{posts.id}</div>
          <div>{posts.title}</div>
          <div>{posts.datetime}</div>
          <div>{posts.body}</div>
        </>
      }
    </div>
    </>
  )
}

export default PostPage