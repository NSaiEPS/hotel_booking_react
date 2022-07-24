import React, { useState } from 'react'
import { SelectInsidesign, signings } from '../Redux/Redux_Slice'
import './InsideSignin.css'
import {useDispatch,useSelector} from 'react-redux'


const InsideSignin = () => {
    let dispatch=useDispatch()
  let Selectinsidesign=useSelector(SelectInsidesign)


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

    let handleInsidesignin=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='Insidesignin'>
        <div className='Insidesignin_inside'>
   
   <h2 className='Insidesignin_name'>  Welcome {Selectinsidesign} to the Devi Residencies
    
   </h2> 
<form className='Insidesignin_inside_form' onSubmit={handleInsidesignin}>
    {/* <input placeholder='Enter your name here..' required  type='text' /> */}
    <input placeholder='Enter your email here..' required type='email'
    name='email' value={users.email}/>
   <input placeholder='Enter your password' type='password' required
   name='password'  value={users.password} />
    <button type='submit'
    
    >Signin</button>


    
</form>
        </div>
      {/* Insidesignin */}
    </div>
  )
}

export default InsideSignin
