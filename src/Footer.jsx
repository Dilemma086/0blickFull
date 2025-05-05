import React from 'react';
import './Footer.css';
import { BiLogoTelegram } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  
  return (
    <section className='footer'>
      <div className='footer_main'>
        <div>© 0blick™ {new Date().getFullYear()}. All rights reserved.</div>
        <div className='footer_icon' >
          <a href="https://t.me/o_blick_bot"><BiLogoTelegram /></a>
          <a href="https://github.com/Dilemma086"><FaGithub /></a>
        </div>
        
      </div>
    </section>
  )
}

export default Footer;