import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useUserAuth } from '../context/useAuthContext'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email,  setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const {signUp} = useUserAuth()
    const [error, setError] = useState('');
    const navigate = useNavigate()
    // const [user, loading, error] = useAuthState(auth);
    // const history = useHistory();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("")
      try { 
        await signUp(email, password)
        navigate("/")
      } catch (err) {
        setError(err.message)
      }
    }


  return (
    <div className='onbooard'>
          <div className="onbooardContainer">
              <h4>Sign Up</h4>
              { error && <Alert variant="danger">{error.slice(9)}</Alert> }
              <div className="formControl">
                  <form action="" onSubmit={handleSubmit}>

                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={(event) => setEmail(event.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" />

                    <button type="submit">Sign Up</button>

                  </form>

                  <div className="forgetPasswordContainer">
                      <div>
                      </div>
                      <div className='signupBtn'>
                          <Link className='darkLink underlineText' to="/auth/signin">Sign In</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Signup 