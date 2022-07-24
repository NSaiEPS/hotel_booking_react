import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { SelectUser } from '../Redux/Redux_Slice'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { db } from '../../Firebase'
import Tables from './Tables'

const Dashboard = () => {
  let selectuser=useSelector(SelectUser)
  const navigate = useNavigate()


  if(selectuser?.email!=='deviresidencies@admin.com')
  {
    navigate('/')
  }


  let handlechek=()=>{
  db.collection('tables').add({
    name:'table',
    val:1
    

  })}

  let [posts,setposts]=useState({
   
  })

  useEffect(()=>{
    db.collection('tables').onSnapshot((snapshot)=>{
      setposts(snapshot.docs.map((doc)=>({
          
          id:doc.id,
          data:doc.data(),
        
      })))
    }) ;
},[])

console.log(posts)




  return (
    <div>
      Dashboard

      <button onClick={handlechek}>Add</button>
    
      <div>
      { (Array.isArray(posts)) &&( posts?.map((item,indx)=>{
        return(
          <div key={Math.random()}>
            <Tables id={item.id} name={item.data.name} val={item.data.val} index={indx} />
            

            </div>

        )
      }))}
      </div>
    </div>
  )
}

export default Dashboard
