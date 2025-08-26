import React, { useContext } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import { Context } from '../../context/StoreContex'
import Signup from '../signup/Signup'

const Home = () => {
  const { showLoginForm } = useContext(Context);
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      {showLoginForm && <Signup />}
      <Hero />
      <Footer />
    </div>
  )
}

export default Home