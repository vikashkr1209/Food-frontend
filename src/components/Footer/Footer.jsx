import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p> we’re passionate about bringing delicious meals straight to your doorstep. Whether you’re craving comfort food, exploring new cuisines, or enjoying a quick bite, we’ve got you covered. Follow us on social media for the latest updates, exclusive deals, and mouth-watering food inspiration.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-1234-567-890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
        <hr />
        <p className="footer-copyright">
        © 2025 tomato. All rights reserved. | Delivering happiness, one meal at a time.
        </p>
    </div>
  )
}

export default Footer
