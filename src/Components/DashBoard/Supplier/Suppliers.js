import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase'
import './Suppliers.css'
import SuppliersData from './SuppliersData'
import {suplersnumb,SelectSupliernumb} from '../../Redux/Redux_Slice'
import {useDispatch,useSelector} from 'react-redux'



const Suppliers = () => {
  let [suplyform,Setsuplyform]=useState(false)
  let [suplier,setSuplier]=useState({})
  let dispatch=useDispatch()
  let selectsupliernumb=useSelector(SelectSupliernumb)


  let [suplyinfo, setSuplyinfo]=useState([{
    name:'',
    email:'',
    password:''
  }])
  let addsuplierform=()=>{
    Setsuplyform(true)
  }
  let deletesuplierform=()=>{
    Setsuplyform(false)

  }

  let addnewsupplier=(e)=>{
    e.preventDefault()
    db.collection('suppliers').add({
   name:suplyinfo.name,
   email:suplyinfo.email,
   password:suplyinfo.password,
   active:true,
   survingTable:''
      
  
    })}

    useEffect(()=>{

 
      db.collection('suppliers').onSnapshot((snapshot)=>{
        setSuplier(snapshot.docs.map((doc)=>({
            
            id:doc.id,
            data:doc.data(),
          
        })))
      }) ;
  
      let len=suplier.length;
    dispatch( suplersnumb(
      len
    ))
    
  
  
  },[])

  let len=suplier.length;
    dispatch( suplersnumb(
      len
    ))
  let nam,val;

  let storeusers=(e)=>{
    nam=e.target.name;
    val=e.target.value;
    setSuplyinfo({...suplyinfo,[nam]:val})

}

  return (
    <div className='Suppliers'>
   
      
       <button className='addsuplierbtn' onClick={addsuplierform}>Add Suppliers</button>

    
      {suplyform && <div className='Suppliers_from_div'>
      
      
      <div className='Suppliers_div'>
      <form onSubmit={addnewsupplier}>
        <input placeholder='Enter the name of the supplier' required type='text' name='name'  onChange={storeusers}/>
        <input placeholder='Enter the email of the supplier' required type='email'  name='email' onChange={storeusers}/>
        <input placeholder='Enter the password of the supplier' required type='password' name='password'onChange={storeusers}
         />


         <button className='Suppliers_div_submitbtn' type='submit'>Submit</button>
     <button className='Suplierform_cancelbtn' onClick={deletesuplierform}>X</button>

       </form> 


       </div> </div>
       
       } 
       



       <table className='Suppliers_Data_table'>
  <th >Name</th>
        <th >email</th>
        <th >password</th>
        <th >active</th>
        <th >survingTable</th>
  </table>


       {
        Array.isArray(suplier) &&
        suplier?.map((data,indx)=>{
          return(
            <div key={Math.random()}>
          
              <SuppliersData name={data.data.name} email={data.data.email}
              password={data.data.password} active={data.data.active}
              survingTable={data.data.survingTable} id={data.id} index={indx}
              />

            </div>
          )
        })
       }
     


      
    </div>
  )
}

export default Suppliers
