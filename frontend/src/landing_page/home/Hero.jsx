import React from 'react'
import homeHero from '../../assets/homeHero.png'
import ecosystem from '../../assets/ecosystem.png'
import pressLogo from '../../assets/pressLogos.png'
import { FaArrowRightLong } from "react-icons/fa6";
import pricing0 from '../../assets/pricing0.svg'
import pring20 from '../../assets/intradayTrades.svg';
import education from '../../assets/education.svg'


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
        <img style={{ width: '710px', height: '40px' }} src={pressLogo} alt="" />
      </div>


      {/* unbeatable pricing */}
      <div className="pricing">
        <h3>Unbeatable pricing</h3>
        <div className="pricing-item">
          <div className="text">
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          </div>
          <div className="pricing-image">
            <div className='pricing-box'>
              <img src={pricing0} alt="" />
              <p>Free account
                opening</p>
            </div>
            <div className='pricing-box'>
              <img src={pricing0} alt="" />
              <p>Free equity delivery
                and direct mutual funds</p>
            </div>
            <div className='pricing-box'>
              <img src={pring20} alt="" />
              <p> Intraday and
                F&O</p>
            </div>
          </div>

        </div>
        <a href="#">See pricing <FaArrowRightLong />   </a>
      </div>


      {/* education section  */}

      <div className="education">
        <div className="edu-image">
          <img src={education} alt="" />
        </div>
        <div className="edu-desc">
          <h3>Free and open market education</h3>
          <div className='edu-info'>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="#">Varsity  <FaArrowRightLong /></a>
          </div>
          <div className='edu-info'>
            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="#">TradingQ&A  <FaArrowRightLong /></a>
          </div>
        </div>
      </div>

      {/* open account section */}
      <div className="heroText mt-3 d-flex  flex-column align-items-center gap-2">
        <h1>Open a Zerodha account</h1>
        <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button className='btn btn-outline-success mt-3'>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero