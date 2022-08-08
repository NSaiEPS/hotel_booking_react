import React, { useEffect, useState } from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { insidesign, Selectloginsuplier, SelectUser, themes } from '../Redux/Redux_Slice'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase'


const BoostrapHeader = () => {
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
        // alert('light dark')


    }

    let handleLighttheme=()=>{
        dispatch(themes(
            'light'
        ))
        // alert('light theme')
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


// let a=[1,2,5,8,8,6,8,3,6,]
// a.map((ite,indx)=>{
//   // console.log(ite,indx)
//   if(ite===3){
//     a.splice(indx,1)
//   }
  
// })

// a.map((ite,indx)=>{
  
//   // console.log(ite,indx)
//   if(ite===3){
//     a.splice(indx,1)
//   }
  
// })
// console.log(a)

// let ar=[]

// for(const x of a) {
//   if(!ar.includes(x)){
//     ar.push(x)
//   }
// }

// console.log(ar)


// let st=[]

// for(const x of a) {
//   if(!st.includes(x)){
//     // st.push(`${x}`)
//     // let s=x.toString()
//     // let s=`${x}`
//     // st.push(s)
//     // let s=x.toString
//     st.push((x.toString()))
//   }
// }

// console.log(st)
// const arr ='oudhac j';



// for (const element of arr) {
//   console.log(element); // 👉️ a

//   // if (element === 'b') {
//   //   break;
//   // }
//   console.log(element); // 👉️ a
// }


  return (
    <div className='Boostrapheader'>


        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
          <div className="container-fluid">
            <img className='restarent_img'
              src='https://img.freepik.com/premium-vector/initial-dr-letter-logo-with-script-typography-vector-template-creative-script-letter-dr-logo-design_616200-715.jpg' alt='Devi restarent'
              onClick={() => {
                navigate('/')
              }} />
            <a className="nav-link active text-black Logo_name" aria-current="page">The Devi Residencies</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                </li>




               

                


                 
                  {(selectuser)&& (selectuser?.useemail===`deviresidencies@admin.com`) && 
          (<div className='Boostrapheader_Admindashboard'>
           <button onClick={handlegotodashboard} type="button" className="btn btn-primary bg-white">
           {window.location.pathname==='/admindashboard'? 
       <Link to={`/`} > Go back  </Link>:
       <Link to={`admindashboard`} > Admin DashBoard  </Link>

   }
           </button>
           {/* <button onClick={handlegotodashboard} type="button" className="bg-white btn-sm btn-outline-primary">
       

       {window.location.pathname==='/admindashboard'? 
       <Link to={`/`} > Go back  </Link>:
       <Link to={`admindashboard`} > Admin DashBoard  </Link>

   }
       </button> */}
        </div>)
        }
{/*         
      {(selectuser)&& (selectuser?.useemail===`deviresidencies@admin.com`) &&  
      
        
      <button onClick={handlegotodashboard} >
       

       {window.location.pathname==='/admindashboard'? 
       <Link to={`/`} > Go back  </Link>:
       <Link to={`admindashboard`} > Admin DashBoard  </Link>

   }
       </button>}

       <div classNameName=''>
           dsfiiuh
           
        </div> */}
        
        {/* {true ? 'true':'false'}
        {window.location.pathname==='/admindashboard'? 
                <Link to={`/`} > Go back  </Link>:
                <Link to={`admindashboard`} > Admin DashBoard  </Link>

            } */}
                  
                
                
               
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle outline-secondary my-2 Signin_option" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Signin
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {/* <button onClick={handleSignuser}>Signin as User</button>
                    <button onClick={handlesupplier}>Signin as Supplier</button>
                    <button onClick={handleAdmin}>Signin as Admin</button>
                 */}
                
                    <li onClick={handleSignuser}>
                      
                    <a className="dropdown-item" >
                      Signin as User </a></li>
            <li><hr className="dropdown-divider"/></li>

            <li onClick={handlesupplier}>
              
            <a className="dropdown-item" >
                      Signin as Supplier </a> </li>

            <li><hr className="dropdown-divider"/></li>
            <li onClick={handleAdmin}>
            <a className="dropdown-item" >
                      Signin as Admin </a> </li>  </ul>
                </li>
                <li className="nav-item logout_option">
                {/* <button type="button" className="btn btn-success">Success</button> */}
                <button type="button" className="btn btn-success btn-sm my-2 Logout_btn"
           onClick={handleLogout} >Logout</button>
                </li>

                <li className="nav-item dropdown Themes_option">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Themes
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={handleLighttheme}><a className="dropdown-item my-1"  >Blue</a></li>
                  <li ><hr className="dropdown-divider"  /></li>

                  <li onClick={handleDarkTheme}><a className="dropdown-item my-1" >Black</a></li>


                  {/* <div className={ !navicon? 'Header_inside_themes':'Header_inside_themes_nav'}>
            <button onClick={handleLighttheme}>Light</button>
            <button onClick={handleDarkTheme}>Dark</button>
        </div> */}
                  {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
              </li>
              </ul>
              {/* <form className="d-flex">

                
              </form> */}
            </div>
          </div>
        </nav>


      
    </div>
  )
}

export default BoostrapHeader
