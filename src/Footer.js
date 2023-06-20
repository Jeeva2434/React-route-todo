import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
            <p>Hi &copy; {currentYear}</p>
    </div>
  )
}

export default Footer