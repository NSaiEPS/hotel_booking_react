import React from 'react'

const SuppliersData = ({id,index,name,email,password,active,survingTable}) => {
  return (
    <div>
       <table className='SuppliersData'>
  
  <tr>
     <td className='Supliers_name'>{name} </td>
     <td className='Supliers_Survedby'>{email}</td>
     {/* <td className='Supliers_Survedby'>{password}</td> */}
     <td className='Supliers_Active'>
         {active ? <button className='Tabledata_btn_booked'>Active</button>:
          <button className='Tabledata_btn_notbooked'>not Active</button>}
         </td>
     <td className='Supliers_tablenumb'> {survingTable? survingTable: '--'}</td>
     
     
  </tr>
 

</table>
    </div>
  )
}

export default SuppliersData
