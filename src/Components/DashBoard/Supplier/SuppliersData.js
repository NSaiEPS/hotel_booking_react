import React from 'react'
import { db } from '../../../Firebase';

const SuppliersData = ({id,index,name,email,password,active,survingTable}) => {

  let handledeleteSuplier=()=>{
    alert(' are you sure to delete this Table !')
    db.collection('suppliers').doc(id).delete()
   

    // db.collection('users').doc(bookeduserid).update({
    //   ['survedby']: '',
    //   ['table']:'',
    //   ['active']:'',

    // })

    // db.collection('suppliers').doc(survedid).update({
    //   ['survingTable']:``,
    // })

  }
  return (
    <div>
       <table className='SuppliersData'>
  
  <tr>
    
     <td className='Supliers_name'>{name} </td>
     <td className='Supliers_Survedby'>{email}</td>
    
     <td className='Supliers_Active'>
         {active ? <button className='Tabledata_btn_booked'>Active</button>:
          <button className='Tabledata_btn_notbooked'>not Active</button>}
         </td>
     <td className='Supliers_tablenumb'> {survingTable? survingTable: '--'}</td>
     
     
  </tr>
 

</table>

<div className='Supliersdata_phones'>

<table>
  <tr>
   <div>
    <td>Name</td>
    <td className='Supliers_name'>{name} </td>

   </div>
  


  <div>
    <td>email</td>
    <td className='Supliers_Survedby'>{email}</td>

  </div>

  <div>
    <td>active</td>
    <td className='Supliers_Active'>
         {active ? <button className='Tabledata_btn_booked'>Active</button>:
          <button className='Tabledata_btn_notbooked'>not Active</button>}
         </td>
  </div>

  <div>
    <td>
      survingTable
    </td>
    <td className='Supliers_tablenumb'> {survingTable? survingTable: '--'}</td>

  </div>
  

  <div>
  <button onClick={handledeleteSuplier}>Delete this Suplier</button>
</div>
  </tr>
</table>

</div>
    </div>
  )
}

export default SuppliersData
