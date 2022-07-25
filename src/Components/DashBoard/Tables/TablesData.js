import React from 'react'
import './TablesData.css'

const TablesData = ({name,active,survedby,id,bookedby,index}) => {
  return (
    <div>
      {/* TablesData */}
      {/* {name} {index+1}
      {active}
      {survedby}
      {bookedby} */}

      <table className='TableData'>
  
         <tr>
            <td className='TableData_name'>{name} {index+1}</td>
            <td className='TableData_Active'>
                {active ? <button className='Tabledata_btn_booked'>Booked</button>:
                 <button className='Tabledata_btn_notbooked'>Not yet booked</button>}
                </td>
            <td className='TableData_bookedby'> {survedby?'': 'empty'}</td>
            <td className='TableData_Survedby'>{bookedby? '': 'empty'}</td>
         </tr>
        

      </table>
    </div>
  )
}

export default TablesData
