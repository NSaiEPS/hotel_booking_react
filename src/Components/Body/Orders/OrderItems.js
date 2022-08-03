import React, { useState } from 'react'
import { db } from '../../../Firebase'
import './OrderItems.css'
import { Delete } from '@material-ui/icons'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { Selectloginsuplier, totalorderprice } from '../../Redux/Redux_Slice';


const OrderItems = ({orderid,ordername,noofitems,price,index,tableid}) => {
 let dispatch=useDispatch()

  dispatch(

            totalorderprice({
              price
            }
              
    
            ))
 
 
  let supliername=useSelector(Selectloginsuplier)
  let [itemprice,setItemprice]=useState(0)

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



  if(supliername){
  
    if(itemprice>0){

        db.collection('tables').doc(tableid).collection('orders').doc(orderid).update({
          ['price']: itemprice,
         
  
        })
        // alert('editted successfully')
        setUpdate(false)
  
  
  
      }
      else{
        alert( 'Price must be greater than ₹ 0')
      }
  
  
  }

    }

    else {
      alert('Not able to edit!  No.of items must be greater than 0')
    }





  }


let handleprice=(e)=>{
  if(supliername){
    if(update){

  setItemprice(e.target.value)
   
      // if(itemprice>0){

      //   db.collection('tables').doc(tableid).collection('orders').doc(orderid).update({
      //     ['price']: itemprice,
         
  
      //   })
      //   alert('editted successfully')
      //   setUpdate(false)
  
  
  
      // }
      // else{
      //   alert( 'Price must be greater than ₹ 0')
      // }




     }
     else {
      alert('please click edit button to edit')
     }
  }
 else {

  alert(`U can't edit the price, only the supplier can edit the price`)}

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

    <small>Name</small>
    <input value={input.ordersname} type='text' name='ordersname' onChange={handlechaneinput}/>
    </div>


    <div>
      {/* {noofitems} */}
      <small>no.ofitems</small>

   <input value={input.ordersvalue} type='number' name='ordersvalue' onChange={handlechaneinput}/>
       </div>


    
       <div>
      <small>update</small>

      <span>

       {update? <UpgradeIcon onClick={onorderedit} className='update_icon'/>: <EditIcon  onClick={onordereditask}/>} 
      </span>
    

      </div>




    <div >
    <small>Delete</small>

      <span>
      <Delete onClick={handleorderdelete}/></span></div>
    
      <div >  
      {/* {price}  */}
      <small>Price</small>

      <input type='number' value={ (update && supliername)? itemprice: price} onChange={handleprice}/>

      <span>₹</span>
      </div>

        </div>
    </div>
  )
}

export default OrderItems
