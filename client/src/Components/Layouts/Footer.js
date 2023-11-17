import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer'>
      <h4 className='text-center'>All Right Reseved &copy; MarketBazar</h4>
     < p className="text-center mt-3"> 
         <Link to='/about'>About Us</Link>
         <Link to='/policy'>Privacy Policy</Link>
         <Link to='/contact'>Contact Us</Link>
     </p>
    </div>
  )
}

export default Footer