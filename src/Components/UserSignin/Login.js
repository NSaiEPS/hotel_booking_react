import React, { useState } from 'react'
import './Login.css'
import {useDispatch} from 'react-redux'
import { insidesign, signings, userinfo } from '../Redux/Redux_Slice'
import { auth } from '../../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

const Login = ({name}) => {
    let dispatch=useDispatch()

    let handlegotoSignup=()=>{
   dispatch(
    signings(
        'signup'
    )
   )

   toast('Welcome back ! enjoy the journey', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    // pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });




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
    // console.log(users.email,users.password)

    let handlelogin=(e)=>{
        e.preventDefault()
        
    }


    let handlenamecncl=()=>{
      dispatch(
        insidesign(null)
      )
      // window.location.reload()
    }




let [signinagin,setSigninagain]=useState(false)

    const loginToSubmit=(e)=>{
      e.preventDefault();
 
      auth.signInWithEmailAndPassword(users.email,users.password).then (userAuth=>{
        setSigninagain(true)
       
      })
 .catch(error=>alert(error))

//  if(signinagin){
//   //need to add welcome message
     
//     window.location.reload()}


    }
    if(signinagin){
        //need to add welcome message
           
          window.location.reload()}




  return (
    <div className='Login'>
        <div className='Login_inside'>
   
   <h2 className='Login_name'>  Welcome {(name)? (name):''} to the Devi Residencies
    
   </h2> 
   <span>login to procede further</span>
<form className='Login_inside_form' onSubmit={handlelogin}>
    <input placeholder='Enter your email here..' required type='email'  onChange={storeusers}
    name='email' value={users.email}/>
   <input placeholder='Enter your password' type='password' required onChange={storeusers}
   name='password'  value={users.password} />
    
    
    
    
    
   {(name)? <button type='submit'  onClick={loginToSubmit}
    
    >Signin</button> :<button type='submit'  onClick={loginToSubmit}
    
    >Login</button>} 
    
    



{(!name) && <span> Not a member ?

<button className='Login_inside_form_signup' 
onClick={handlegotoSignup}>Signup</button>

     </span> }
    
</form>
{(name)&& <div className='name_cncl_btn'>
          <button onClick={handlenamecncl}>X</button>
        </div>}

        </div>

       
      {/* Login */}
    </div>
  )
}

export default Login
