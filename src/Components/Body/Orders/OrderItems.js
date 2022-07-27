import { Delete } from '@material-ui/icons'
import React from 'react'
import { db } from '../../../Firebase'
import './OrderItems.css'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import EditIcon from '@mui/icons-material/Edit';


const OrderItems = ({orderid,ordername,noofitems,price,index,tableid}) => {
// console.log(tableid)
    let handleorderdelete=()=>{
        alert(`Are you sure to delete! ${ordername}`)
        db.collection('tables').doc(tableid).collection('orders').doc(orderid).delete()
    }
  return (
    <div className='OrderItems'>
        <div className='OrderItems_inside'>{index+1} 
    <div> 

      {/* {index+1}   */}
     {/* {ordername} */}


    <input value={ordername} type='text'/>
    </div>


    <div>
      {/* {noofitems} */}

   <input value={noofitems} type='number'/>
       </div>


    <div> ₹ 
      {/* {price}  */}
      <input type='number' value={price}/>
      </div>


    <div onClick={handleorderdelete}><Delete /></div>
    <div><button>
    <EditIcon />

      </button></div>

        </div>
    </div>
  )
}

export default OrderItems
