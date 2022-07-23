import React, { useState } from 'react';
import './Signup.css';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';

export default function Signup() {

    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password, name)
            .then((auth) => {
                
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/login')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='signup'>

          <a href='/'>
          <img
          className='signup__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
          alt='' 
          />
          </a>

          <div className='signup__container'>
                    <h1>Create account</h1>
    
                    <form>
                        <h5>Your name</h5>
                        <input type='text' value={name} onChange={e => setName(e.target.value)} />

                        <h5>Email</h5>
                        <input type='text' required value={email} onChange={e => setEmail(e.target.value)} />
    
                        <h5>Password</h5>
                        <input type='password' required placeholder=' Password must be at least 6 characters' value={password} onChange={e => setPasword(e.target.value)} />

                        <h5>Re-enter Password</h5>
                        <input type='password'/>
    
                        <button type='submit' className='signup__signInButton' onClick={register}>Continue</button>
                    </form>
    
                    <p>
                        By creating an account you agree to the Christotle Fake AMAZON CLONE Conditions of Use and Privacy Notice. 
                    </p>
                    
                    <p>
                        Already have an account? <a className='signup-a' href='/login'>Sing-in</a> 
                    </p>

                    <p>
                        Buying for work? <button>Create a free business account</button> 
                    </p>
    
                    
                </div>

                
    
        </div>
      )
}
