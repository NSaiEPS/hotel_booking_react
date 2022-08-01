import React, { useEffect, useState } from 'react'
import './Booking_Section.css'
// import './Body.css'
import { useDispatch, useSelector } from 'react-redux'
import { auth, db } from '../../Firebase'
import { Selecttablenumber, Selectunbookedtables, unbookedtable,SelectbookeduserID, SelectUser, usernoofbooking, SelectUserbookingnum, bookingorderdetails, Selectloginsuplier } from '../Redux/Redux_Slice'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/compat/app';
import { Link} from 'react-router-dom'
import { Message } from '@material-ui/icons'
import Alert from '@material-ui/lab/Alert';

import MoreVertIcon from '@mui/icons-material/MoreVert';
// <MoreVertIcon /> 
// import UpgradeIcon from '@mui/icons-material/Upgrade';
// import EditIcon from '@mui/icons-material/Edit';


const Booking_Section = ({name,active,bookedby,survedby,bookeremail,id,index,bookerid}) => {
let selectbookeduserid=useSelector(SelectbookeduserID)
const [userss,loading]=useAuthState(auth)


// console.log(survedby)

let selectuser=useSelector(SelectUser)
let dispatch=useDispatch()
let usernobooking=useSelector(SelectUserbookingnum)
// let suplieremailk=useSelector(SelectUserbookingnum)

let [moreoption,setMoreoptions]=useState(false)
let [booksuccess,setBooksuccess]=useState(false)
let [bookfailure,setBookfailure]=useState(false)
let handlemoreOption=()=>{
  setMoreoptions(!moreoption)
}
let handlemoreblur=()=>{
  // setMoreoptions(false)
}



// if( userss && bookerid===selectbookeduserid) {
// let tablenum=`${name}${index+1}`

// dispatch(
//   bookingorderdetails({
//     bookeduserid:bookerid,
//     tableid:id,
//     tablenumb:tablenum,
//     bookername:bookedby
//   }

//   )

// )

// }




let handlebookbtn=()=>{

  if(usernobooking){
    alert(`U can't book more than 1 table!`)
  }
  else {
    // alert('want to book!')
    let name;
   if(selectbookeduserid){
    name=userss.displayName;

   }
   setBooksuccess(true)
   console.log(booksuccess)

db.collection('tables').doc(id).update({
          ['active']: true,
          ['bookedby']:name,
          ['bookeduserid']:selectbookeduserid,
          ['bookeremail']:(selectuser?.useemail),
        })

        db.collection('users').doc(selectbookeduserid).update({
          ['active']: true,
           ['table']:(index+1)
        })

  // dispatch(usernoofbooking(1))
  
  

  // Message('Booked successfully!')

}

  }

  let handleunbookbtn=()=>{
    alert('Are you sure!')
    setBookfailure(true)
    console.log(bookfailure)
    db.collection('tables').doc(id).update({
      ['active']: false,
      ['bookedby']:'',
      ['bookeduserid']:'',
      ['survedby']:'',
      ['bookeremail']:''
    })

    db.collection('users').doc(selectbookeduserid).update({
      ['active']: '',
       ['table']:''
    })
    dispatch(usernoofbooking(''))

   
    // Message('Cancelled successfully!')
    // db.collection('tables').doc(id).collection('orders').delete()

    db.collection("tables").doc(id).collection('orders')
  .get()
  .then(res => {
    res.forEach(element => {
      element.ref.delete();
    });
  });
  
  }

  let handlecheck=()=>{

    // alert('clicken')
  }




   
  // let [post,setposts]=useState({})

//   let handleDelete=()=>{
//       db.collection('tables').doc(id).update({
//           ['name']: firebase.firestore.FieldValue.delete(),
//           ['val']: firebase.firestore.FieldValue.delete()
//         })

//   }
//   let handleupdate=()=>{
//       db.collection('tables').doc(id).update({
//           ['name']: `table ${index+1}`
//         })

  
//   }

//   let handleAddnew=()=>{
//       db.collection('tables').doc(id).update({
//           ['user']: `table ${index+1}`
//         })

//   }
// let handleEntirecollection=()=>{
//   db.collection('tables').doc(id).delete()

// }




// useEffect(()=>{
// db.collection('tables').doc(id).collection('orders').onSnapshot((snapshot)=>{
//   setposts(snapshot.docs.map((doc)=>({
        
//     id:doc.id,
//     data:doc.data(),
  
// })))

// })

// },[])


// console.log(post)

// let handleorder=()=>{



//   db.collection('tables').doc(id).collection('orders').add({
//     name:'chicken',
//     val:2
    

//   })

// }






let onclickingOrders=()=>{
   //need to dispatch
  // selectbookeduserid

  //booked user id to add the collection or orders

  //id
  //table id to add the collection orders

  //table number &
  
  //  bookedby booker name
  let tablenum=`${name}${index+1}`

  dispatch(
    bookingorderdetails({
      bookeduserid:bookerid,
      tableid:id,
      tablenumb:tablenum,
      bookername:bookedby
    }

    )

  )




}


let handlesaynobook=()=>{
  if((selectuser?.useemail)==='deviresidencies@admin.com')
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
       <button className={((bookerid===selectbookeduserid)|| (survedby===selectuser?.useemail))? 'booked_btn_you':'booked_btn'}
       
       onClick=   {handlecheck}
       > 
      { (bookerid===selectbookeduserid)? `It's your table enjoy!`:
      
      (survedby===selectuser?.useemail)? `It's your suplying table!`:
      
      'Booked'}
       
       </button>: 

      <button className='notbooked_btn' 
      onClick={ selectbookeduserid?  handlebookbtn:handlesaynobook}> Book</button>
         }
    
    </div>

{  active &&
    <div  className='booking_more_options'>
      {((bookerid===selectbookeduserid) || (survedby===selectuser?.useemail)) &&
      
      // <button  onClick={handlemoreOption}
      //  onBlur={handlemoreblur} >
        
 <MoreVertIcon  onClick={handlemoreOption} /> 

        // </button>
        }
    
    
    {((bookerid===selectbookeduserid) || (survedby===selectuser?.useemail)) && moreoption && <div className='booking_more_options_btn'>
      
    <button  onClick={onclickingOrders}>
      <Link to={`/userorders`} > Orders  </Link>
        
        </button>
      <button onClick={handleunbookbtn}  
      >Cancel Booking</button>
      
      </div>

    }
    
    
    </div>}

   </div>

   </div>
   <div className='Booking_Section_bottom'>
  

  {active?  (bookerid===selectbookeduserid)?
  <span className='Booking_Section_bottom_youbookeed'> {`You booked this Table ${index+1}`}</span>
  : <span>Booked by <b>{bookedby}</b></span>
    // `Booked by ${bookedby}`
  : `ready to book`
  }

   {(bookerid===selectbookeduserid)}
   </div>



{/* {booksuccess && 


<Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
} */}
{/* <Alert variant="filled" severity="info">
  Booked successfully
</Alert> */}

{
  bookfailure &&
  <Alert variant="filled" severity="info">
  unBooked successfully
</Alert>

}
        </div>
    </div>
  )
}

export default Booking_Section
