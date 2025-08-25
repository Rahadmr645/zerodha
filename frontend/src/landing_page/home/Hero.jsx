import React from 'react'
import homeHero from '../../assets/homeHero.png'
import ecosystem from '../../assets/ecosystem.png'
import pressLogo from '../../assets/pressLogos.png'
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className='hero-container '>
      {/* first section */}
      <div className="hero_image ">
        <img className='heorImage' src={homeHero} alt="" />
      </div>
      <div className="heroText d-flex  flex-column align-items-center gap-2">
        <h1>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-outline-success mt-3'>Sign up for free</button>
      </div>

      {/* second section */}
      <div className="second-section">
        <div className="text-side ">
          <h4 className='mb-5'>Trust with confidence</h4>
          <div className='eco-text-container'>
            <h5>Customer-first always</h5>
            <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div className='eco-text-container'>
            <h5>No spam or gimmicks</h5>
            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.<a href='#'>Our philosophies.</a></p>
          </div>
          <div className='eco-text-container'>
            <h5>The Zerodha universe</h5>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>
          <div className='eco-text-container'>
            <h5>Do better with money</h5>
            <p>With initiatives like Nudge  and  Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>
        <div className="second-image ">
          <img style={{ width: '440px', height: '420px' }} src={ecosystem} alt="" />
          <div className="link mt-5 d-flex gap-5">
            <a style={{ textDecoration: 'none' }} href="#">Explore our products <FaArrowRightLong /> </a>
            <a style={{ textDecoration: 'none' }} href="#">Try Kite demo <FaArrowRightLong /> </a>
          </div>
        </div>
      </div>
      <div className="third-image mt-2">
        <img style={{width:'710px',height:'40px'}} src={pressLogo} alt="" />
      </div>
    </div>
  )
}

export default Hero