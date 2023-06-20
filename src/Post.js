import React from 'react'
import PostPage from './PostPage'
import { useParams,Link} from 'react-router-dom'

const Post = ({post}) => {
  // console.log(useParams());
  // const {id,user} = useParams();
  return (
    <div className='post'>
      {/* Post {id} {user} */}
      <>
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
      </Link>
      <p className='postBody'>{
        (post.body).length <= 25
           ? post.body
           : `${(post.body).slice(0,25)}...`
        }
      </p>
      </>
    </div>
  )
}

export default Post