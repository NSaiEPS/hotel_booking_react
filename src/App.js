import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Signup from './Components/UserSignin/Signup';
import {useSelector} from 'react-redux'
import { SelectInsidesign, Selectsigning, Selecttablenumber, SelectTheme, SelectUser, tablenumber,bookedusersid, usernoofbooking } from './Components/Redux/Redux_Slice';
import Login from './Components/UserSignin/Login';
import InsideSignin from './Components/UserSignin/InsideSignin';
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom'
import Dashboard from './Components/DashBoard/Dashboard';
import { auth, db } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from 'react-spinkit'
import Body from './Components/Body/Body';
import {useDispatch} from 'react-redux'
import Orders from './Components/Body/Orders/Orders';




function App() {
  let [login,setlogin]=useState(false)
  let Userinfo=useSelector(SelectUser)
  const [userss,loading]=useAuthState(auth)

  let seletlogin=useSelector(Selectsigning)
  let Selectinsidesign=useSelector(SelectInsidesign)
  let selecttheme=useSelector(SelectTheme)
  // console.log(seletlogin)

  let selecttablenumber=useSelector(Selecttablenumber)

  // console.log(selecttablenumber)
  let dispatch=useDispatch()
  
  let [tables,settables]=useState({
   
  })
  let len=tables.length;
  dispatch(
    tablenumber(len)
  )
  // console.log(tables.length)
  useEffect(()=>{
    db.collection('tables').onSnapshot((snapshot)=>{
      settables(snapshot.docs.map((doc)=>({
          
          id:doc.id,
          data:doc.data(),
        
      })))
    }) ;
let len=tables.length;
    dispatch(
      tablenumber(len)
    )
  
   

},[])
// const [userss,loading]=useAuthState(auth)
// let dispatch=useDispatch()

  let [user,setUser]=useState({})

useEffect(()=>{
  db.collection('users').onSnapshot((snapshot)=>{
    setUser(snapshot.docs.map((doc)=>({
        
        id:doc.id,
        data:doc.data(),
      
    })))
  }) ;

},[])

let requerid;
if(Array.isArray(user)){

  user?.map((userinformation)=>{
     if(
      userinformation?.data?.email===userss?.email
     )
     { requerid=userinformation.id;
      // console.log(userinformation.id)
      dispatch(bookedusersid(
        requerid
      ))
     
      dispatch
        (usernoofbooking(
          userinformation?.data?.table
          )
      )

     }
  })
}





  if (loading) {

    return (
      <div className='loading_app'>
        <div className='loading_spin'>
          {/* <img src='https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDNcGN0cZPzzCbVWTk%2BDpcU3dmnhcFxWY9mCZ01OTON9AiEAt0mQs3CbxZaBZPlAkedhHyUAd29Vb56%2FF5I7CQ4dvwoq0gQIKxAAGgwxODcwMTcxNTA5ODYiDDdqr2GRtO%2FyHiOgziqvBPzmpiuIKNFNXd9M7jYeUyfjjNDX5lbL9sUXmpRsaXggHTtbOufNHWCH3v127eUPzqmarS2OaaPkH90KLrpfyICoxF7COp557wcQDzzecx1ji9HRUXDsrLxOmuDA8ezPURdj%2BIT0pYBRrvf%2FE4WzHAYKs9impYbyCBw%2FuwltdMC%2B0loglAlt%2FvOIJ4mTYNK3q7Gt1BEj6Z3yVn5IvLeDZCXYUUm4bCvjqGjRGl41aw9vbhJsOV%2Ff9jUM2bHrnX5uzxXRc4IKSJXld77m%2B8uG6LQBzgY35cK7WAL0aD%2Fy1hioy7Bt6VIED7r8GhpymVv806xuC1HpOrOHhyMTt%2FvvWeojE%2Fo35GGBpj%2B8ZA2NIkWcCk01lLsD1eBAkZ8uD3u1xBqT9lfRo%2BLR1TOGo01KzCc6mGe0tJFQW0mw3lP0NgNBWAlIkY04vvargMcZ1kLuuAsmHglKbY7zhR75LjGRUYUbpEIvlLHw81dX4ps1YUXYfmpnbCykU0OPg2yzErUXDrbzCrS1XzhsbiquMQiVNbh%2FSbMP6XN%2F6wkoKN9fxmL96x0MmUf8Qu03uhX9JwCrRTQJWVG9pLXBybnBvAxyUn%2F4XyKcsoI8fz6YiR25Zaum9tp0W2KCbVRfvhLoSNFar%2BqiaaMBeoJHdNxrN%2F8%2Ff37ozXDDAi3u2dv9CGfolfusBR84B2ta8rcMPvyBFQq6t7ywyKe0T%2FTgFiV5ilLogtLdSz6g4AUFU2xP%2Fjfb7i0wh6bflgY6qQEQNWCuX6t0ZifX9e2zDeO5eKAK7p8RSTP4h7BNI%2B1HJuKeFNu4cjqL1oc%2BOV3cdcZWCLl4N7VG6q1ALhSXDqtKqrxyZgcXz0WRK%2Fc0yGA8HsMzAQ4pXqgt3jgAJCMho4whzsgssCxTQe7rdF%2FgDjHbKQAtvTXL25FoRaXR74TZpn6%2FVXV0z1vXYiufR%2BPxFQ3hPQPZwMAwbNngl1EyhKjldcmk9Fwbll%2By&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220720T103634Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLGK2OIY5%2F20220720%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b04ad0b09258898f5eaa869cb92b81fbfd11c4ef8be541617d0ed51d80b6803b' alt='Reipe img' /> */}

          <Spinner
            name='ball-spin-fade-loader'
            color='green'
            fadeIn='none'

          />

        </div>
      </div>
    )
  }







  return (
    <div className={(selecttheme==='light')? 'App':'App_dark'}>
      {/* Welocme to the Devi Residencies */}

      <div className='App_inside'>

       {Userinfo? '':  (seletlogin==='signup')  ? <Signup/> :<Login/> } 
       {Selectinsidesign ? <Login name={Selectinsidesign}/>:''}
      <Header/> 
       

       
      <Routes>
      <Route path='/admindashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Body/>}/>
      <Route path='/user/orders' element={<Orders/>}/>

      </Routes>


      </div>
    </div>
  );
}

export default App;
