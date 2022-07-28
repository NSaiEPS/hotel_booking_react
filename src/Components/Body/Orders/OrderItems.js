import { Delete } from '@material-ui/icons'
import React, { useState } from 'react'
import { db } from '../../../Firebase'
import './OrderItems.css'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import EditIcon from '@mui/icons-material/Edit';


const OrderItems = ({orderid,ordername,noofitems,price,index,tableid}) => {

let [input,setInput]=useState({
  ordersname:`${ordername}`,
  ordersvalue:`${noofitems}`
})

let [update,setUpdate]=useState(false)

let onordereditask=()=>{
  setUpdate(true)
  // console.log(update)


}
// console.log(update)

 let handlechaneinput=(e)=>{
  // console.log(update)
  if(update){
    // alert('updated')
  let nam=e.target.name;
  let val=e.target.value;

  setInput({
    ...input,[nam]:val
  })

  }
  else {
    alert('click edit button to edit it.')
  }
 }


    let onorderedit=()=>{
     
  if(input.ordersvalue>0){

      db.collection('tables').doc(tableid).collection('orders').doc(orderid).update({
        ['name']: input.ordersname,
        ['noofitems']:input.ordersvalue

      })
      alert('editted successfully')
      setUpdate(false)



    }

    else {
      alert('Not able to edit!  No.of items must be greater than 0')
    }
  }


let handleprice=()=>{
  alert(`U can't edit the price, only the supplier can edit the price`)
}


    // console.log(tableid)
    //Deleting
    let handleorderdelete=()=>{
      alert(`Are you sure to delete! ${ordername}`)
      db.collection('tables').doc(tableid).collection('orders').doc(orderid).delete()
  }



  return (
    <div className='OrderItems'>
      <small className='showing_index'>{index+1})</small>

        <div className='OrderItems_inside'>
          {/* <span>
          {index+1} 
          </span> */}
          
    <div> 

      {/* {index+1}   */}
     {/* {ordername} */}


    <input value={input.ordersname} type='text' name='ordersname' onChange={handlechaneinput}/>
    </div>


    <div>
      {/* {noofitems} */}

   <input value={input.ordersvalue} type='number' name='ordersvalue' onChange={handlechaneinput}/>
       </div>


    
       <div>
      <span>

       {update? <UpgradeIcon onClick={onorderedit} className='update_icon'/>: <EditIcon  onClick={onordereditask}/>} 
      </span>
    

      </div>




    <div onClick={handleorderdelete}>
      <span>
      <Delete /></span></div>
    
      <div >  
      {/* {price}  */}
      <input type='number' value={price} onChange={handleprice}/>

      <span>₹</span>
      </div>

        </div>
    </div>
  )
}

export default OrderItems
