import React from 'react';
import './SignIn.css'

const SignIn = () =>{
    return(
        <div className="size">
            <div className={'text-center'}>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
            </div>
           
            <hr />

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
             
            <div class="clearfix">
           
            <button type="submit" className="btn btn-success">Sign Up</button>
            </div>
        </div>
    )
}
export default SignIn;