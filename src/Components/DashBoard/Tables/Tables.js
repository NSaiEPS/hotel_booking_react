import React, { useEffect, useState } from 'react'
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from '../../../Firebase';
import firebase from 'firebase/compat/app';
import './Tables.css'
import TablesData from './TablesData';
import {useDispatch} from 'react-redux'
import { tablenumber } from '../../Redux/Redux_Slice';


const Tables = ({id,name,val,index}) => {
     
  let dispatch=useDispatch()



   
// let [post,setposts]=useState({})

//     let handleDelete=()=>{
//         db.collection('tables').doc(id).update({
//             ['name']: firebase.firestore.FieldValue.delete(),
//             ['val']: firebase.firestore.FieldValue.delete()
//           })

//     }
//     let handleupdate=()=>{
//         db.collection('tables').doc(id).update({
//             ['name']: `table ${index+1}`
//           })

    
//     }

//     let handleAddnew=()=>{
//         db.collection('tables').doc(id).update({
//             ['user']: `table ${index+1}`
//           })

//     }
//   let handleEntirecollection=()=>{
//     db.collection('tables').doc(id).delete()

//   }




//   useEffect(()=>{
//   db.collection('tables').doc(id).collection('orders').onSnapshot((snapshot)=>{
//     setposts(snapshot.docs.map((doc)=>({
          
//       id:doc.id,
//       data:doc.data(),
    
//   })))

//   })

// },[])


// // console.log(post)

// let handleorder=()=>{


  
//     db.collection('tables').doc(id).collection('orders').add({
//       name:'chicken',
//       val:2
      
  
//     })

// }


let addnewtable=()=>{
  db.collection('tables').add({
    name:'Table',
    active:false,
    bookedby:'',
    survedby:'',
    bookeremail:''
    

  })}


  let [tables,settables]=useState({
   
  })

  // console.log(tables.length)
  useEffect(()=>{
    db.collection('tables').onSnapshot((snapshot)=>{
      settables(snapshot.docs.map((doc)=>({
          
          id:doc.id,
          data:doc.data(),
        
      })))
    }) ;

    // dispatch(
    //   tablenumber(tables.length)
    // )
  
    let len=tables.length;
    dispatch(
      tablenumber(len)
    )

},[])


let unbooked;
// console.log(unbooked)
  return (
    <div className='Tables'>
        {/* {id}
        {name}
        {val} */}
        {/* <button onClick={handleupdate}>update</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleAddnew}>Add new</button>
      <button onClick={handleEntirecollection}>Delete entire collection</button>
      <button  onClick={handleorder}
      >Add orders</button> */}
      


      {/*  { (Array.isArray(posts)) &&( posts?.map((item,indx)=>{
        return(
          <div key={Math.random()}>
            <Tables id={item.id} name={item.data.name} val={item.data.val} index={indx} />
            

            </div>

        )
      }))} */}


<div className='Tables_inside'> 

<button onClick={addnewtable}
className='Tables_inside_addingtable'>Add new table</button>

<div className='Tables_Data'>
  <table className='Tables_Data_table'>
  <th className='TableData_name'>Name</th>
        <th className='TableData_Active'>Active</th>
        <th className='TableData_bookedby'>Bookedby</th>
        <th className='TableData_Survedby'>Survedby</th>
  </table>

  { 
    (Array.isArray(tables) && tables?.map((item,indx)=>{
      {(!item.data.active)&& (unbooked++) }
      return(
        <div key={Math.random()}>
          <TablesData name={item.data.name} active={item.data.active} bookedby={item.data.bookedby}
           survedby={item.data.survedby} id={item.id} index={indx} 
    bookeremail={item.data.bookeremail} bookeduserid={item.data.bookeduserid}
    survedid={item.data.survedid}

    />

          </div>
      )
    }))
  }

</div>



</div>
      
    </div>
  )
}

export default Tables
