import React, { useEffect, useState } from 'react'
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from '../../Firebase';
import firebase from 'firebase/compat/app';


const Tables = ({id,name,val,index}) => {
    console.log(id,name,val)


    // const cityRef = doc(db, 'tables', 'name:table' , 'val:1');
    
    // // Remove the 'capital' field from the document
    //  updateDoc(cityRef, {
    //     capital: deleteField()
    // });



   
let [post,setposts]=useState({})

    let handleDelete=()=>{
        db.collection('tables').doc(id).update({
            ['name']: firebase.firestore.FieldValue.delete(),
            ['val']: firebase.firestore.FieldValue.delete()
          })

    }
    let handleupdate=()=>{
        db.collection('tables').doc(id).update({
            ['name']: `table ${index+1}`
          })

    
    }

    let handleAddnew=()=>{
        db.collection('tables').doc(id).update({
            ['user']: `table ${index+1}`
          })

    }
  let handleEntirecollection=()=>{
    db.collection('tables').doc(id).delete()

  }

  useEffect(()=>{
  db.collection('tables').doc(id).collection('orders').onSnapshot((snapshot)=>{
    setposts(snapshot.docs.map((doc)=>({
          
      id:doc.id,
      data:doc.data(),
    
  })))

  })

},[])


console.log(post)

let handleorder=()=>{


  
    db.collection('tables').doc(id).collection('orders').add({
      name:'chicken',
      val:2
      
  
    })

}

  return (
    <div>
        {id}
        {name}
        {val}
        <button onClick={handleupdate}>update</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleAddnew}>Add new</button>
      <button onClick={handleEntirecollection}>Delete entire collection</button>
      <button  onClick={handleorder}
      >Add orders</button>
      
    </div>
  )
}

export default Tables
