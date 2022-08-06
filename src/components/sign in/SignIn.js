/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from "react-router-dom";
export default function SignIn(){
    // data stoarge form
    const [signInForms, setSignInForms] =React.useState(
        {
            email:'',
            password:''
        }
    )
    //submit forms btn
    function handleSubmit(event) {
        event.preventDefault()
        alert(`Hello again! ${signInForms.email}`);
    }
    // on change form area
    function signInHandleChange(event){
        const {name, value} = event.target
        setSignInForms(prevSignInForms => {
            return{
            ...prevSignInForms,
            [name] : value
            }
        })
    }
return(
        <form className='sign-in-card' onSubmit={handleSubmit}>
            <div className='email-container'>
                <p className='sign-in-email'>E-mail</p>
                <input
                type='email'
                className='sign-in-email-input'
                placeholder='E-mail'
                name='email'
                onChange={signInHandleChange}
                value={signInForms.email}
                />
            </div>
            <div className='password-container'>
                <p className='sign-in-password'>Password</p>
                <input
                type='password'
                className='sign-in-password-input'
                placeholder='Password'
                name='password'
                onChange={signInHandleChange}
                value={signInForms.password}
                />
            </div>
            <button className='sign-in-card-in-btn'>Sign In</button>
            <Link to="/Signup" className='sign-in-card-up-btn'>
                <button >Sign Up</button>
            </Link>
        </form>
)
}
