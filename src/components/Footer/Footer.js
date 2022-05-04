import React from 'react'
import './Footer.css'

const Footer = () => {
  // Getting current year
  const currentYear = new Date().getFullYear()
  return (
    <div className='footer-container'>
      <p>Copyright &copy; Fruit Mama {currentYear}. All rights reserved.</p>
    </div>
  )
}

export default Footer
