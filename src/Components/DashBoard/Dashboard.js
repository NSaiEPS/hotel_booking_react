import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { SelectUser } from '../Redux/Redux_Slice'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { db } from '../../Firebase'
import Tables from './Tables/Tables'
import './Dashboard.css'
import Users from './Users/Users'
import Suppliers from './Supplier/Suppliers'

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
    active:false
    

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
let [contents,setcontents]=useState({
  table:false},{
  users:false},{
  suppliers:false

})


// setUsers({...users,[nam]:val})
let contenttable=()=>{
  setcontents({
    ...contents,table:true,suppliers:false,users:false
  }
    
   
  )
}

let contentuser=()=>{
  setcontents({
    ...contents,table:false,suppliers:false,users:true
  }
    
   
  )
}

let contentsupplier=()=>{
  setcontents({
    ...contents,table:false,suppliers:true,users:false
  }
    
   
  )
}

console.log(contents.users,contents.suppliers,contents.table)

  return (
    <div className='Dashboard'>
     
     <div className='dashboard_inside'>
  
  {/* <table>
    <th>Tables</th>
    <th>Users</th>
    <th>Suppliers</th>

    <tr>

    </tr>
  </table> */}


       <div className='dashboard_maincontants'>
      <div><button className={contents.table && 'dashboard_btn_active'}
      onClick={contenttable}>Tables</button></div>  
      <div><button className={contents.users && 'dashboard_btn_active'}
       onClick={contentuser}>Users</button></div>  
      <div><button  className={contents.suppliers && 'dashboard_btn_active'}
      onClick={contentsupplier}>Suppliers</button></div>  
       
        
       </div>




      {/* <button onClick={handlechek}>Add new table</button> */}
    
      <div className='dashboard_section'>

      {/* { (Array.isArray(posts)) &&( posts?.map((item,indx)=>{
        return(
          <div key={Math.random()}>
            <Tables id={item.id} name={item.data.name} val={item.data.val} index={indx} />
            

            </div>

        )
      }))} */}

      {(contents.table) && <Tables/>}
      {(contents.users) && <Users/>}
      {(contents.suppliers) && <Suppliers/>}


      </div>
      </div>
    </div>
  )
}

export default Dashboard
