import React, { useState } from 'react'
import './Booking_Section.css'
// import './Body.css'
import { useDispatch, useSelector } from 'react-redux'
import { auth, db } from '../../Firebase'
import { Selecttablenumber, Selectunbookedtables, unbookedtable,SelectbookeduserID, SelectUser, usernoofbooking, SelectUserbookingnum } from '../Redux/Redux_Slice'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/compat/app';

const Booking_Section = ({name,active,bookedby,survedby,id,index,bookerid}) => {
let selectbookeduserid=useSelector(SelectbookeduserID)
const [userss,loading]=useAuthState(auth)

let selectuser=useSelector(SelectUser)
let dispatch=useDispatch()
let usernobooking=useSelector(SelectUserbookingnum)
let [moreoption,setMoreoptions]=useState(false)

let handlemoreOption=()=>{
  setMoreoptions(!moreoption)
}

let handlebookbtn=()=>{

  if(usernobooking===1){
    alert(`U can't book more than 1 table!`)
  }
  else {
    alert('want to book!')
    let name;
   if(selectbookeduserid){
    name=userss.displayName;
   }


db.collection('tables').doc(id).update({
          ['active']: true,
          ['bookedby']:name,
          ['bookeduserid']:selectbookeduserid
        })

        db.collection('users').doc(selectbookeduserid).update({
          ['active']: true,
           ['table']:(index+1)
        })

  dispatch(usernoofbooking(1))
}

  }

  let handleunbookbtn=()=>{
    alert('Are you sure!')
    db.collection('tables').doc(id).update({
      ['active']: false,
      ['bookedby']:'',
    })

    db.collection('users').doc(selectbookeduserid).update({
      ['active']: '',
       ['table']:''
    })
    dispatch(usernoofbooking(0))



  }

  let handlecheck=()=>{

    alert('clicken')
  }




   
  // let [post,setposts]=useState({})

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




// useEffect(()=>{
// db.collection('tables').doc(id).collection('orders').onSnapshot((snapshot)=>{
//   setposts(snapshot.docs.map((doc)=>({
        
//     id:doc.id,
//     data:doc.data(),
  
// })))

// })

// },[])


// console.log(post)

let handleorder=()=>{



  db.collection('tables').doc(id).collection('orders').add({
    name:'chicken',
    val:2
    

  })

}















let handlesaynobook=()=>{
  if(selectuser.useemail==='deviresidencies@admin.com')
  alert(`Admin can't book the table! , u can login with different mail & book the table!`)
  else {
    alert(`Oppps! Some thing went wrong`)
  }


}


  return (
    <div className='Booking_Section'>
      {/* Booking_Section */}
      <div className='Booking_Section_inside'>
   <div className='Booking_Section_top'>
   <div> <h4> {name} {index+1}</h4> </div>
   <div className='Booking_Section_top_img_dev'>
    <img className='Booking_Section_top_img'
     src='https://img.archiexpo.com/images_ae/photo-m2/11520-13263878.jpg'/>
   
    <div className='Booking_Section_top_img_dev_showing'
    >
      {/* <button className={active? 'booked_btn':'notbooked_btn'}>{active? 'Booked':'Book'}</button> */}
      {active?  
       <button className='booked_btn'
       
       onClick=   {handlecheck}
       > Booked</button>: 

      <button className='notbooked_btn'
      onClick={ selectbookeduserid?  handlebookbtn:handlesaynobook}> Book</button>
         }
    
    </div>

{  active &&
    <div className='booking_more_options'>
      {(bookerid===selectbookeduserid) && <button onClick={handlemoreOption}>:</button>}
    
    
    {(bookerid===selectbookeduserid) && moreoption && <div className='booking_more_options_btn'>
      <button onClick={handleunbookbtn}
      >Cancel Booking</button>
      <button>Orders</button>
      </div>

    }
    
    
    </div>}

   </div>

   </div>
   <div className='Booking_Section_bottom'>
  

  {active? `Booked by ${bookedby}`: `Not yet booked`}
   </div>

        </div>
    </div>
  )
}

export default Booking_Section
