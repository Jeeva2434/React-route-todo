import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <>
     <div>PageLayout</div>
     <ul>
       <li><Link to="/postpage/1/j">Post 1</Link></li>
       <li><Link to="/postpage/2/a">Post 2</Link></li>
       <li><Link to="/postpage/3">Post 3</Link></li>
       <li><Link to="/postpage/newpost">New Post</Link></li>
     </ul>
     <Outlet/>
    </>
  )
}

export default PageLayout