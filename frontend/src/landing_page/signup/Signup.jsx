import React, { useContext } from 'react'
import { Context } from '../../context/StoreContex'

const Signup = () => {

    const { currState, setCurrState, setShowLoginForm } = useContext(Context);
    return (
        <div className='login-container'>
            <form className='container ' style={{ width: '500px', position: 'absolute', top: '100px', left: '400px', backdropFilter: 'blur(40px)', background: 'rgba(255, 255,255,0.5)', borderRadius: '10px', padding: '20px', boxShadow: '0 5px 30px rgba(0,0,0,0.5)' }}>
                {currState === 'Signup' ?
                    <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="username" />
                    </div> : <></>
                }
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

                {currState === 'Signup' ?
                    <p>Have an account ? <span onClick={() => setCurrState('Login')}>CLICK HERE</span></p> :
                    <p>Don't have an account ? <span onClick={() => setCurrState('Signup')}>CLICK HERE</span></p>
                }
               <button onClick={() => setShowLoginForm(false)} className='btn btn-outline-danger'>cancel</button>
            </form>
        </div>
    )

}

export default Signup