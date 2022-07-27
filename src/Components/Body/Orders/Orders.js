import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../../Firebase'
import { Selectbookingorderdetails, SelectUserbookingnum } from '../../Redux/Redux_Slice'
import './Orders.css'

const Orders = () => {
let orderdetails=useSelector(Selectbookingorderdetails)
let{bookeduserid,tableid,tablenumb,bookername}=orderdetails;
// console.log(bookeduserid,tableid,tablenumb,bookername)
    

let [input,setInput]=useState('')

let handleinput=(e)=>{
    setInput(e.target.value)
}

let handleaddOrders=()=>{

    
    db.collection('tables').doc(bookeduserid).collection('orders').add({
        name:input,
        noofitems:''
        
    
      })




}

  return (
    <div className='Orders'>
        <h3>Hello {bookername} this is your booking page</h3>
        <div className='Orders_inside'>



           <div className='Ordering_input'>
            <form>
                <input placeholder='type your orders here...' type='text' value={input}
                onChange={handleinput}
                />
                <input placeholder='no.of' type='number'    />
               { input&& <button onClick={handleaddOrders}
               >Add</button>

               } 
            </form>

           </div>

        </div>
      
    </div>
  )
}

export default Orders
