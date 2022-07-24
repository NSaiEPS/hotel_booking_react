import React, { useState } from 'react'
import './Signup.css'
import {useDispatch} from 'react-redux'
import { signings, userinfo } from '../Redux/Redux_Slice'
import {auth} from '../../Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'


const Signup = () => {
  let dispatch=useDispatch()

  const [userss,loading]=useAuthState(auth)
  console.log(userss?.email)

  if (userss) {
    dispatch(userinfo(
      userss
    ))
  }

  let handlegotoLogin=()=>{
    dispatch(signings(
      'login'
    ))


  }
  let [users,setUsers]=useState([{
    name:'',email:'',password:''
  }])


let nam,val;
let store=(e)=>{
  nam=e.target.name;
  val=e.target.value;
  setUsers({...users,[nam]:val})

}

// console.log(users.name,users.email,users.password)



let handleSignup=(e)=>{
  e.preventDefault()

 
  auth.createUserWithEmailAndPassword(users.email,users.password).then((userAuth)=>{
    userAuth.user.updateProfile({
      displayName:users.name,
      
    })})
 .catch(error=>alert(error))
    
}





  return (
    <div className='Signup'>
        <div className='Signup_inside'>
   
   <h2 className='Signup_name'>  Welcome to the Devi Residencies
    
   </h2> 


<form className='Signup_inside_form' onSubmit={handleSignup}>
    <input placeholder='Enter your name here..' required  type='text'
     onChange={store} name='name'  value={users.name}
    />
    <input placeholder='Enter your email here..' required type='email'
    onChange={store} name='email' value={users.email}
    />
   <input placeholder='Enter your password' type='password' required
    onChange={store} name='password' value={ users.password}
    />
    <button type='submit'
    
    >Signup</button>
    <span> Already a member ?

    <button className='Signup_inside_form_login' 
     onClick={handlegotoLogin} >Login</button>

    </span>
</form>
        </div>
      {/* Signup */}
    </div>
  )
}

export default Signup
