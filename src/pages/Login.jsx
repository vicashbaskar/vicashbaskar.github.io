import React from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';


export function Login() {
    return (
        <div className='login-page'>
        <div className='login-container'>
            <h3 className="login-header">Login Page</h3>

            <form className='login-form'>
                <div className='login-input'><input type="text" placeholder='userName' required className="login-inputbox" /> <br /><br /></div>
                <div className='login-input'> <input type="password" placeholder='Password' required minlength="6" className="login-inputbox" /><br /><br /></div>
                <div className='login-link'><Link to=''>Forget password?</Link></div>
                <div className='login-submit-btn'><input type="submit" value="submit" className="login-submit" /></div>
            </form>
        </div>
        </div>
    )
}