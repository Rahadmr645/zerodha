import React, { useContext } from 'react'
import Hero from './Hero'
import { Context } from '../../context/StoreContex'
import Signup from '../signup/Signup'

const Home = () => {
  const { showLoginForm } = useContext(Context);
  return (
    <div style={{ position: 'relative' }}>
      {showLoginForm && <Signup />}
      <Hero />
    </div>
  )
}

export default Home