import React, { useState } from 'react'
import './TablesData.css'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import EditIcon from '@mui/icons-material/Edit';
import { db } from '../../../Firebase';

const TablesData = ({name,active,survedby,id,bookedby,index,bookeremail}) => {

  let [editsurvemail,setEditsurvemail]=useState(false)
  let [survingemail,setSurvingemail]=useState('')
  let handlesurvingemail=(e)=>{
    if(!editsurvemail){
      alert('Please click edit button to edit')
    }
    setSurvingemail(e.target.value)

  }
  let onsurvedeit=()=>{
    setEditsurvemail(true)
  }

  let onsurveupgrade=()=>{
    setEditsurvemail(false)
    let checkemail=survingemail.split('@')
    if(checkemail[1]!=='deviresidenciessupliers.com'){
      alert(`input must contain  "deviresidenciessupliers.com"` )
    }

    else {
      db.collection('tables').doc(id).update({
        ['survedby']: survingemail,
        

      })
    }


  }
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
            <td className='TableData_bookedby'> { bookedby? bookedby: '--'}</td>
            <td className='TableData_Survedby'>{survedby? survedby:
            active? 
            <div className='surveddata_edit'>
            <input placeholder='Yet to bedecided by you' onChange={handlesurvingemail} type='email' value={editsurvemail ? survingemail:''}/>

            {editsurvemail? <span><UpgradeIcon onClick={onsurveupgrade} className='update_icon'/></span>: 
            <span><EditIcon  className='edit_icon' onClick={onsurvedeit}/> </span>} 

            </div>
            
            :'--'}</td>
         </tr>
        

      </table>
    </div>
  )
}

export default TablesData
