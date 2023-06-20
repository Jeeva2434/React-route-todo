import React from 'react'

const NewPost = ({handleSubmit,postTitle,setPostTitle,postBody,setPostBody}) => {
  return (
    <>
      <div>NewPost</div><br></br>
      <form onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label><br></br><br></br>
        <input type='text' id="postTitle" value={postTitle} onChange={(e)=>setPostTitle(e.target.value)} required/>
        <br></br><br></br>
        <label htmlFor='postBody'>Post:</label>
        <br></br><br></br>
        <textarea type='text' id="postBody" value={postBody} onChange={(e)=>setPostBody(e.target.value)} required/>
        <br></br><br></br>
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default NewPost