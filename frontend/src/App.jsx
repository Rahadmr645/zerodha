import React from 'react'
import './App.css';
import Home from './landing_page/home/Home';
import Navbar from './landing_page/home/Navbar';
import Footer from './landing_page/home/Footer';
import { Routes, Route } from 'react-router-dom';
import Signup_page from './landing_page/signup/Signup_page';
const App = () => {
  return (
    <div>
      <Navbar />

      {/* router section */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signupPage' element={<Signup_page />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App