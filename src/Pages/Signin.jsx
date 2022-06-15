import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/useAuthContext'
import Alert from 'react-bootstrap/Alert';

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signIn} = useUserAuth()
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try { 
          await signIn(email, password)
          navigate("/checkout")
        } catch (err) {
          setError(err.message)
        }
      }

  return (
      <div className='onbooard'>
          <div className="onbooardContainer">
              <h4>Sign In</h4>
              { error && <Alert variant="danger">{error.slice(9)}</Alert> }
              <div className="formControl">
                  <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit">Sign in</button>
                  </form>
                  <div className="forgetPasswordContainer">
                      <div>
                          <Link className='darkLink underlineText' to="/reset">Forgot Password</Link>
                      </div>
                      <div className='signupBtn'>
                          <Link className='darkLink underlineText' to="/auth/signup">Sign Up</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Signin