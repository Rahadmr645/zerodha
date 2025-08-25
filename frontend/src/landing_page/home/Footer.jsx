import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import logo from '../../assets/logo.svg'
const Footer = () => {


  return (
    <div className='footer'>
      <div className='first'>
        <img style={{width:'150px'}} src={logo} alt="" />
        <p>© 2010 - 2025, Zerodha Broking Ltd.</p>
        <p>All rights reserved.</p>
        <div className='first-icons d-flex gap-2'>
          <a href=""><CiLinkedin /></a>
          <a href="#"><IoLogoFacebook /></a>
          <a href="#"><FaSquareXTwitter /></a>
          <a href="#"><FaInstagramSquare /></a>
        </div>
        <div className="second-icons d-flex gap-3">
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaWhatsappSquare /></a>
          <a href="#"><FaTelegram /></a>
        </div>
      </div>
      <div className='link-box'>
        <h3>Account</h3>
        <a href="#">Open demat account</a>
        <a href="#">Minor demat account</a>
        <a href="#">NRI demat account</a>
        <a href="#">Commodity</a>
        <a href="#">MTF</a>
        <a href="#">Referral program</a>
      </div>
      <div className='link-box'>
        <h3>Support</h3>
        <a href="#">Contact us</a>
        <a href="#">Support portal</a>
        <a href="#">How to file a complaint?</a>
        <a href="#">Status of your complaints</a>
        <a href="#">Bulletin</a>
        <a href="#">Circular</a>
        <a href="#">Z-Connect blog</a>
        <a href="#">Downloads</a>
      </div>
      <div className='link-box'>
        <h3>Company</h3>
        <a href="#">About</a>
        <a href="#">Philosophy</a>
        <a href="#">Press & media</a>
        <a href="#">Careers</a>
        <a href="#">Zerodha Cares (CSR)</a>
        <a href="#">Zerodha.tech</a>
        <a href="#">Open source</a>
      </div>
      <div className='link-box'>
        <h3>Quick links</h3>
        <a href="#">Upcoming IPOs</a>
        <a href="#">Brokerage charges</a>
        <a href="#">Market holidays</a>
        <a href="#">Economic calendar</a>
        <a href="#">Calculators</a>
        <a href="#">Markets</a>
        <a href="#">Sectors</a>
      </div>
    </div>
  )
}

export default Footer