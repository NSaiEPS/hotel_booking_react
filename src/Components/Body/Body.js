import { dblClick } from '@testing-library/user-event/dist/click'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../Firebase'
import { Selecttablenumber, SelectTheme, Selectunbookedtables, unbookedtable } from '../Redux/Redux_Slice'
import './Body.css'
import Booking_Section from './Booking_Section'
import FuaturedItems from './FuaturedItems'

const Body = () => {
  
  // console.log(db.collection('tables'))

  let selecttablenumber=useSelector(Selecttablenumber)
  let selectunbookedtables=useSelector(Selectunbookedtables)

  // console.log(selecttablenumber)
  let dispatch=useDispatch()

  // let [remaintables,setRemainTables]=useState(0)

  let selecttheme=useSelector(SelectTheme)

  

  let [tables,settables]=useState({
   
  })

  // .log(tables.length)
  useEffect(()=>{
    db.collection('tables').onSnapshot((snapshot)=>{
      settables(snapshot.docs.map((doc)=>({
          
          id:doc.id,
          data:doc.data(),
        
      })))
    }) ;

},[])








let unb=0;
let [unbooked,setUnbooked]=useState(0)
let unbooked1=0;
// console.log(unbooked)

 { Array.isArray(tables) && tables?.map((items)=>{
  let ac=items.data.active;
  if(!ac) {
    unb+=1;
    

  }
  // console.log(unb)
  // setUnbooked(unb)
  // dispatch(unbookedtable(
  //   unb
  // )

  // )
})}



// console.log(unb)
useEffect(()=>{
  dispatch(
    unbookedtable(unb)
  )
},[unb])

useEffect(()=>{
  dispatch(
    unbookedtable(unb)
  )
},[tables])
// setUnbooked(unb)





  return (
    <div className='Body'>
      <div className='Body_inside' >

        <div className='Offers_dev'>
         <span>New</span>  50% off on all Items
        </div>

        <div className='fuatereditems_dev'>
          
          <h2>Fuatered Items</h2>

        <FuaturedItems/>




        </div>

        <div className={(selecttheme==='light')? 'Body_Booking_Section':'Body_Booking_Section Body_Booking_Section_dark' } >
          {/* Booking section */}

       <p> <span>We have </span> <b>{selecttablenumber? selecttablenumber:'...'}</b> tables in which
        <b> {(selecttablenumber-selectunbookedtables)}</b> tables are booked, remaing <b>{selectunbookedtables}</b> tables are are avilable for booking </p>
         
        <div className='Body_Booking_Section_inside'>
         
        { 
    (Array.isArray(tables) && tables?.map((item,indx)=>{
     
      return(
        <div key={Math.random()}>
          <Booking_Section name={item.data.name} active={item.data.active} bookedby={item.data.bookedby}
           survedby={item.data.survedby} id={item.id} index={indx} bookerid={item.data.bookeduserid}
           bookeremail={item.data.bookeremail} />
           
        {/* {!item.data.active ? unbooked1++ :''} */}

          </div>
      )
    }))
  }
         </div>
         
         {/* <Booking_Section /> */}
        </div>

      </div>
    </div>
  )
}

export default Body
