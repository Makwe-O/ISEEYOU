import React from 'react';
import './SignIn.css'

const SignIn = ({ onRouteChange }) =>{
    return(
        <div className="size">
            <div className={'text-center'}>
                <h1>Sign In</h1>
            </div>
           
            <hr />

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <div className="clearfix">
            <button type="submit" className="btn btn-success" onClick={() => onRouteChange('home')}>Sign In</button>
            
            <div className={'text-center'}>
                <p>Not Registered?. <a href="#"  onClick={() => onRouteChange('register')}>Register</a></p>
            </div>
            
            </div>  

        </div>
    )
}
export default SignIn;