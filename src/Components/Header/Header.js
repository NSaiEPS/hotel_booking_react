import React, { useEffect, useState } from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { insidesign, Selectloginsuplier, SelectUser, themes } from '../Redux/Redux_Slice'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase'


const Header = () => {
    let dispatch=useDispatch()
    let selectuser=useSelector(SelectUser)
    // console.log(selectuser?.useemail)
    const navigate = useNavigate()
    let supliername=useSelector(Selectloginsuplier)

    let [navicon,setNavicon]=useState(false)


    let handleDarkTheme=()=>{
        dispatch(themes(
            'dark'
        ))

    }

    let handleLighttheme=()=>{
        dispatch(themes(
            'light'
        ))
    }

    let handleSignuser=()=>{
        dispatch(
            insidesign(
                'User'
            )
        )

    }

    let handlesupplier=()=>{
        dispatch(
            insidesign('Supplier')
        )

    }

    let handleAdmin=()=>{
        dispatch(
            insidesign('Admin')
        )

    }


    let handlegotodashboard=()=>{

    }
let handleLogout=()=>{
    auth.signOut()
    window.location.reload()

}
let clickednavicon=()=>{
    // alert('clciked')
    setNavicon(!navicon)

}


useEffect(()=>{
    



},[])


    // console.log(window.location.pathname)
    // Header_navicon
  return (
    <div className=   { navicon?'Header_navicon': 'Header'}>
        <div className='Header_inside'>

     <div className='Header_inside_left'>
        <div>
            <img className='restarent_img'  
            src='https://img.freepik.com/premium-vector/initial-dr-letter-logo-with-script-typography-vector-template-creative-script-letter-dr-logo-design_616200-715.jpg' alt='Devi restarent'/>
        </div>
        <div>
   <h2 className='Header_Login_name'>  Welcome to the Devi Residencies 

    
   </h2>
    </div>
     </div>
     <div className=  {!navicon? 'Header_inside_right_navicon':'Header_inside_right'}>
        <button className='Signin_btn'>Signin</button>

       
       {/* <span class="navbar-toggler-icon  bg-red">oio</span> */}
        <div className= {'Header_inside_right_extra'}>
            <button onClick={handleSignuser}>Signin as User</button>
            <button onClick={handlesupplier}>Signin as Supplier</button>
            <button onClick={handleAdmin}>Signin as Admin</button>
        </div>
       
     </div>
     {/* <div className={'Header_inside_themes'}> */}
     <div className={ !navicon? 'Header_inside_themes':'Header_inside_themes_nav'}>
            <button onClick={handleLighttheme}>Light</button>
            <button onClick={handleDarkTheme}>Dark</button>
        </div>

        <div className='navbar_togle' onClick={clickednavicon} >
        <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav></div>




            

        {(selectuser)&& (selectuser?.useemail===`deviresidencies@admin.com`) && 
          (<div className= { !navicon? 'Header_inside_dashboard':'Header_inside_dashboard_nav'}>
            <button onClick={handlegotodashboard} >
                

                {window.location.pathname==='/admindashboard'? 
                <Link to={`/`} > Go back  </Link>:
                <Link to={`admindashboard`} > Admin DashBoard  </Link>

            }
                </button>
        </div>)}
        { supliername && <div className='Header_inside_dashboard'>

           <span className='supliername_header'>Suplier {supliername}</span>
            </div> }

        <div className={ !navicon ? 'Logout_btn_div':'Logout_btn_div_nav'}>
        <button className='logout_btn'
           onClick={handleLogout} >Logout</button></div>
        </div>
      
    </div>
  )
}

export default Header
