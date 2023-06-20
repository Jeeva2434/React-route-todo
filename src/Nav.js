import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setSearch}) => {
  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='searchField'>Search :</label>
        <input 
          type='text'
          placeholder='Search'
          name='search'
          id="searchField"
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
        />
      </form>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='post'>Post</Link></li>
      </ul>
    </div>
  )
}

export default Nav