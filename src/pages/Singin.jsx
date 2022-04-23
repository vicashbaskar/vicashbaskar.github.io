import React from 'react';
import '../css/Singin.css';
import { Link } from 'react-router-dom';

export function Singin() {
    return (
        <div className='signin-page' >
            <div>
                <h3 className=" signin-header">Register your account</h3>
            </div>
            <div className="signin-container">
                <form className="signin-form">
                    <label htmlFor="fname" >Name</label><br />
                    <input type="text" placeholder="Enter Your full Name" id="input" /><br /><br />
                    <label htmlFor="uname" >UserName</label><br />
                    <input type="text" placeholder="Enter Your UserName" id="input" /><br /><br />
                    <label htmlFor="email">Email address</label><br />
                    <input type="email" placeholder="Enter Your email adress" id="input" /><br /><br />
                    <label htmlFor="Password">Password</label><br />
                    <input type="password" placeholder="Enter Your Password" id="input" /><br /><br />
                    <label htmlFor="confirm password">Confirm Password</label><br />
                    <input type="password" placeholder="Enter Your password Again" id="input" /><br /><br />
                    <input type="submit" value="sign up" id="signup" /><br /><br />
                    <span >Already have an account?<Link to='/Login' id='link'>Login</Link></span>
                </form>
            </div>
            <div className='signin-space'></div>

        </div>
    )
}