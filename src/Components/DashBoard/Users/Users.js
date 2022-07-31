import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase';
import UsersData from './UsersData';
import './Users.css'
import {useDispatch} from 'react-redux'
import {usersnumb} from '../../Redux/Redux_Slice'

const Users = () => {
   let dispatch=useDispatch()

  let [user,setUser]=useState({})

  useEffect(()=>{
    db.collection('users').onSnapshot((snapshot)=>{
      setUser(snapshot.docs.map((doc)=>({
          
          id:doc.id,
          data:doc.data(),
        
      })))
    }) ;
let len=user.length;
    dispatch( usersnumb(
      len
    ))
  


},[])

// console.log(user.length)

let len=user.length;
    dispatch( usersnumb(
      len
    ))

  return (
    <div className='Users'>
     
     <h3>Users</h3> 

      <table className='Users_Data_table'>
  <th className='UserData_name'>Name</th>
        <th className='UserData_tablenumb'>Table booked</th>
        <th className='UserData_Active'>active</th>
        <th className='UserData_Survedby'>survedby</th>
        <th className='UserData_email'>email</th>
  </table>
      {
        Array.isArray(user) && user?.map((data,indx)=>{
          return(
            <div key={Math.random()}>
              <UsersData  id={data.id}  name={data.data.name} email={data.data.email}
               table={data.data.table}  active={data.data.active} index={indx}
               survedby={data.data.survedby}/>

            </div>
          )
        })
      }
    </div>
  )
}

export default Users
