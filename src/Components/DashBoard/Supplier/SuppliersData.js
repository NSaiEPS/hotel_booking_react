import React from 'react'

const SuppliersData = ({id,index,name,email,password,active,survingTable}) => {
  return (
    <div>
       <table className='SuppliersData'>
  
  <tr>
     <td className='TableData_name'>{name} </td>
     <td className='TableData_Survedby'>{email}</td>
     <td className='TableData_Survedby'>{password}</td>
     <td className='TableData_Active'>
         {active ? <button className='Tabledata_btn_booked'>Active</button>:
          <button className='Tabledata_btn_notbooked'>not Active</button>}
         </td>
     <td className='TableData_bookedby'> {survingTable? survingTable: '--'}</td>
     
     
  </tr>
 

</table>
    </div>
  )
}

export default SuppliersData
