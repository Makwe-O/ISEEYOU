import React from 'react';
import './Registration.css'

const Registration = ({ onRouteChange }) =>{
    return(
        <div className="size">
            <div className={'text-center'}>
                <h1>Register</h1>
            </div>
           
            <hr />
        
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label for="psw"><b>Re-Password</b></label>
            <input type="password" placeholder="Re-enter Password" name="re-psw" required />

            <div class="clearfix">
            <button type="submit" className="btn btn-success" onClick={() => onRouteChange('home')}>Register</button>
            
            <div className={'text-center'}>
                <p>Already Registered?. <a href="#"  onClick={() => onRouteChange('signin')}>SignIn</a></p>
            </div>
            
            </div>  

        </div>
    )
}
export default Registration;