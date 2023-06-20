import React from 'react'

const Header = ({title}) => {
  return (
    <div>
      <h3> {title} </h3>
    </div>
  )
}

export default Header
Header.defaultProps={
  title:'SMA' 
}