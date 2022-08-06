/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from "react-router-dom";
export default function SignUp(){
    // data stoarge form
    const [signUpForms, setSignUpForms] =React.useState(
        {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            RePassword:''
        }
    )
        function signUpHandleChange(event){
            const {name, value} = event.target
            setSignUpForms(prevSignUpForms=>{
                return{
                    ...prevSignUpForms,
                    [name]:value
                }
                
            })
        }
        function handleSubmit(event){
            event.preventDefault()
            if(signUpForms.password===signUpForms.RePassword){
                alert(`Submited!
                Thanks ${signUpForms.firstName} ${signUpForms.lastName} for signing up`);
            }else {
                alert('Passwords do not match')
            }
            } 
        
return(
    
        <form className='sign-up-card' onSubmit={handleSubmit}>
            <div className='frist-name-container'>
                <p className='sign-up-frist-name'>First Name</p>
                <input
                type='text'
                className='sign-up-frist-name-input'
                placeholder='First Name'
                name='firstName'
                onChange={signUpHandleChange}
                value={signUpForms.firstName}
                />
            </div>
            <div className='second-name-container'>
                <p className='sign-up-second-name'>Last Name</p>
                <input
                type='text'
                className='sign-up-second-name-input'
                placeholder='Last Name'
                name='lastName'
                onChange={signUpHandleChange}
                value={signUpForms.lastName}
                />
            </div>
            <div className='email-container'>
                <p className='sign-up-email'>E-mail</p>
                <input
                type='email'
                className='sign-up-email-input'
                placeholder='E-mail'
                name='email'
                onChange={signUpHandleChange}
                value={signUpForms.email}
                />
            </div>
            <div className='password-container'>
                <p className='sign-up-password'>Password</p>
                <input
                type='password'
                className='sign-up-password-input'
                placeholder='Password'
                name='password'
                onChange={signUpHandleChange}
                value={signUpForms.password}
                />
            </div>
            <div className='password-container'>
                <p className='sign-up-password'>Re-Password</p>
                <input
                type='password'
                className='sign-up-password-input'
                placeholder='Re-Password'
                name='RePassword'
                onChange={signUpHandleChange}
                value={signUpForms.RePassword}
                />
            </div>
            <Link to="/Signin">
                <p className='sign-up-card-in-link'>already have an account?</p>
            </Link>
            <button className='sign-up-card-up-btn'>Sign Up</button>
        </form>
)
}
