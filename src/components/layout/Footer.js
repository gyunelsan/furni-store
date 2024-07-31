import React from 'react'
import './Footer.css'
import img2 from "../../assets/sofa.png"
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div>
      <br /> <br />
      <footer>
     <div className='d-flex justify-content-around'>

     <div>
      <li>About us</li>
      <li>Services</li>
      <li>Blog</li>
      <li>Contact us</li>
     </div>

     <div>
      <li>Support</li>
      <li>Knowledge base</li>
      <li>Live chat</li>
     </div>

     <div>
      <li>Jobs</li>
      <li>Our team</li>
      <li>Leadership</li>
      <li>Privacy Policy</li>
     </div>

     <div>
      <li>Nordic Chair</li>
      <li>Kruzo Aero</li>
      <li>Ergonomic Chair</li>
     </div>

     <div><img className='sofa_img' src={img2} alt="" /></div>
     </div>
     <div className='sm_icons'>
     <CiFacebook className='svg2' />
     <FaTwitter  className='svg2' />
     <FaInstagram  className='svg2' />
     <FaLinkedin  className='svg2' />
     </div>
     
     <hr />
     <div className='d-flex justify-content-between' >
      
      <p className='copyright'>Copyright ©2024. All Rights Reserved. — Designed with love by Untree.co</p>
      <div className='d-flex'>
        <li className='footer_li'>Terms & Conditions</li>
        <li className='footer_li'>Privacy Policy</li>
      </div>
     </div>
     </footer>
     


    </div>
      


    
  )
}

export default Footer