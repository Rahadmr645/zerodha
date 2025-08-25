import React from 'react'
import { useState } from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {


    const [active, setActive] = useState('');



    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-light sticky-top  mt-3" style={{borderBottom:'1px solid #e3e3e3',}}>
            <div className="container-fluid d-flex justify-content-between w-100"
                style={{ border:"1px solid green",  alignItems: 'center' }}>

                <a className="navbar-brand" style={{ width: "60%", paddingLeft: '200px' }} href="#">
                    <img style={{width:"100px",height:'20px'}} src={logo} alt='logo' />
                </a>

                {/* for toggling */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse "
                    style={{ width: "40%" }} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end pe-5">
                        <li className="nav-item">
                            <a onClick={() => setActive("Signup")} className={`nav-link ${active === "Signup" ? "active" : ""}`} aria-current="page" href="#">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setActive("About")} className={`nav-link ${active === "About" ? "active" : ""}`} href="#">About</a>
                        </li>
                        <li className='nav-item'>
                            <a onClick={() => setActive("Product")} className={`nav-link ${active === "Product" ? "active" : ""}`} href="#">Products</a>
                        </li>
                        <li className='nav-item'>
                            <a onClick={() => setActive("Pricing")} className={`nav-link ${active === "Pricing" ? "active" : ""}`} href="#">Pricing</a>
                        </li>
                        <li className='nav-item'>
                            <a onClick={() => setActive("Support")} className={`nav-link ${active === "Support" ? "active" : ""}`} href="#">Support</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar