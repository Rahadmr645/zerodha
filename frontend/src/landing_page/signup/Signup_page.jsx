import React from 'react'
import signup from '../../assets/signup.png'
import stock_acop from '../../assets/stocks-acop.svg'
import mg_acop from '../../assets/mf-acop.svg'
import ipo_acop from '../../assets/ipo-acop.svg'
import fo_acop from '../../assets/fo-acop.svg'
const Signup_page = () => {
    return (
        <div className='container'>

            {/* first section container */}
            <div className="first-section">
                <div className="heading-text">
                    <h2>
                        Open a free demat and trading account online
                    </h2>
                    <h4>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h4>
                </div>
                <div className="image_input_form_container">
                    <img src={signup} alt="" />
                    <div className="input_form">
                        <h2>Signup now</h2>
                        <h4>Or track your existing application</h4>
                        <div className="input_box">
                            <input type="number" placeholder='Enter your mobile number' />
                        </div>
                        <button className='btn btn-outline-success bg-success'>Get OTP</button>
                        <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
                    </div>
                </div>

            </div>


            {/* second container */}

            <div className="second_section_container">
                <h2>Investment options with Zerodha demat account</h2>
                <div className="options-container">
                    <div className="option-box">
                        <img src={stock_acop} alt="" />
                        <div className="text-box">
                            <h2>Stocks</h2>
                            <p>Invest in all exchange-listed securities</p>
                        </div>
                    </div>
                    <div className="option-box">
                        <img src={mg_acop} alt="" />
                        <div className="text-box">
                            <h2>Mutual funds</h2>
                            <p>Invest in commission-free direct mutual funds</p>
                        </div>
                    </div>
                    <div className="option-box">
                        <img src={ipo_acop} alt="" />
                        <div className="text-box">
                            <h2>IPO</h2>
                            <p>Apply to the latest IPOs instantly via UPI</p>
                        </div>
                    </div>
                    <div className="option-box">
                        <img src={fo_acop} alt="" />
                        <div className="text-box">
                            <h2>Futures & options</h2>
                            <p>Hedge and mitigate market risk through simplified F&O trading</p>
                        </div>
                    </div>
                    <button className='btn btn-outline-success bg-success'>Explore Investments</button>
                </div>
            </div>

            {/* section three */}
            <div className="section_three_container">
                <h3>Steps to open a demat account with Zerodha
                </h3>
                <div className="image_text_container">
                    <img src="" alt="" />
                    <div className="text_box">
                        <div>
                            <h4>1</h4>
                            <h4>Enter the requested details</h4>
                        </div>
                        <div>
                            <h4>2</h4>
                            <h4>Complete e-sign & verification</h4>
                        </div>
                        <div>
                            <h4>3</h4>
                            <h4>Start investing!</h4>
                        </div>
                    </div>
                </div>
            </div>


            {/* section fourth */}
            <div className="section_four_container">
                <div className="image">
                    <img src="" alt="" />
                    <h2>Benefits of opening a Zerodha demat account</h2>
                </div>
                <div className="four_text_boxs">
                    <div className="four_text_box">
                        <h3>Unbeatable pricing</h3>
                        <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.
                        </p>
                    </div>
                    <div className="four_text_box">
                        <h3>Best investing experience</h3>
                        <p>Simple and intuitive trading platform with an easy-to-understand user interface.
                        </p>
                    </div>
                    <div className="four_text_box">
                        <h3>No spam or gimmicks</h3>
                        <p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.
                        </p>
                    </div>
                    <div className="four_text_box">
                        <h3>The Zerodha universe</h3>
                        <p>More than just an app — gain free access to the entire ecosystem of our partner products.
                        </p>
                    </div>

                </div>
            </div>


            {/* section five */}
            <div className="section_five_container">
                <h3>Explore different account types</h3>
                <div className="section_five_box">
                    <h3>Individual Account</h3>
                    <p>Invest in equity, mutual funds and derivatives</p>
                </div>
                <div className="section_five_box">
                    <h3>HUF Account</h3>
                    <p>Make tax-efficient investments for your family</p>
                </div>
                <div className="section_five_box">
                    <h3>NRI Account</h3>
                    <p>Invest in equity, mutual funds,debentures and more</p>
                </div>
                <div className="section_five_box">
                    <h3>Minor Account</h3>
                    <p>Teach your little ones about money and invest for their future with them</p>
                </div>
                <div className="section_five_box">
                    <h3>Corporate/LLP/Partnership</h3>
                    <p>Manage your buisness surplus and investments easily</p>
                </div>
            </div>

        </div>
    )
}

export default Signup_page;