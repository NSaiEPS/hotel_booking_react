import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase';
import UsersData from './UsersData';
import './Users.css'

const Users = () => {


  let [user,setUser]=useState({})

  useEffect(()=>{
    db.collection('users').onSnapshot((snapshot)=>{
      setUser(snapshot.docs.map((doc)=>({
          
          id:doc.id,
          data:doc.data(),
        
      })))
    }) ;

    
  


},[])

console.log(user)

  return (
    <div className='Users'>
     
     <h3>Users</h3> 

      <table className='Users_Data_table'>
  <th className='UserData_name'>Name</th>
        <th className='UserData_Active'>Table booked</th>
        <th className='UserData_Survedby'>active</th>
        <th className='UserData_bookedby'>survedby</th>

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
