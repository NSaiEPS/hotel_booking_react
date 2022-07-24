import React, { useState } from 'react'
import './Login.css'
import {useDispatch} from 'react-redux'
import { signings } from '../Redux/Redux_Slice'

const Login = () => {
    let dispatch=useDispatch()

    let handlegotoSignup=()=>{
   dispatch(
    signings(
        'signup'
    )
   )
    }

    let [users,setUsers]=useState([{
        email:'',
        password:''
    }])

    let nam,val;

    let storeusers=(e)=>{
        nam=e.target.name;
        val=e.target.value;
        setUsers({...users,[nam]:val})

    }
    console.log(users.email,users.password)

    let handlelogin=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='Login'>
        <div className='Login_inside'>
   
   <h2 className='Login_name'>  Welcome to the Devi Residencies
    
   </h2> 
<form className='Login_inside_form' onSubmit={handlelogin}>
    {/* <input placeholder='Enter your name here..' required  type='text' /> */}
    <input placeholder='Enter your email here..' required type='email'
    name='email' value={users.email}/>
   <input placeholder='Enter your password' type='password' required
   name='password'  value={users.password} />
    <button type='submit'
    
    >Login</button>
    <span> Not a member ?

    <button className='Login_inside_form_signup' 
    onClick={handlegotoSignup}>Signup</button>

    </span>
</form>
        </div>
      {/* Login */}
    </div>
  )
}

export default Login
