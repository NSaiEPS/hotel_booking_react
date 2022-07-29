import React, { useEffect, useState } from 'react'
import './TablesData.css'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import EditIcon from '@mui/icons-material/Edit';
import { db } from '../../../Firebase';
import { Delete } from '@material-ui/icons'
import { SelectbookeduserID } from '../../Redux/Redux_Slice';
import { useSelector } from 'react-redux';


const TablesData = ({name,active,survedby,id,bookedby,index,bookeremail,survedid,bookeduserid}) => {

  let [editsurvemail,setEditsurvemail]=useState(false)
  let [survingemail,setSurvingemail]=useState('')
  let [suplierid,setSuplierid]=useState()
let selectbookeduserid=useSelector(SelectbookeduserID)


let [suplier,setSuplier]=useState({})

useEffect(()=>{

 
  db.collection('suppliers').onSnapshot((snapshot)=>{
    setSuplier(snapshot.docs.map((doc)=>({
        
        id:doc.id,
        data:doc.data(),
      
    })))
  }) ;



},[])

// let ide=''
// let [suplierid,setSuplierid]=useState('')

// if(Array.isArray(suplier)){
//  suplier?.map((item,indx)=>{
  
//   if(item?.doc?.email===survingemail){
//     console.log(survingemail)
//     ide=item.id
//     setSuplierid(ide)

//   }
  
  
// })}


// console.log(suplierid)







  let handlesurvingemail=(e)=>{
    if(!editsurvemail){
      alert('Please click edit button to edit')
    }
    else {
    let emailoption=(e.target.value).split(' ')
    console.log(emailoption)
    setSurvingemail(emailoption[0])
    setSuplierid(emailoption[1])
  }

  }
  let onsurvedeit=()=>{
    // alert('clicked')
    setEditsurvemail(true)
  }

  let onsurveupgrade=()=>{
    console.log(survingemail)
    
    setEditsurvemail(false)
    let checkemail=survingemail.split('@')
    if(checkemail[1]!=='deviresidenciessupliers.com'){
      alert(`input must contain  "deviresidenciessupliers.com" or click the option correctly` )
    }

    else {
      db.collection('tables').doc(id).update({
        ['survedby']: survingemail,
        ['survedid']:suplierid,
        

      })
    
      db.collection('users').doc(bookeduserid).update({
        ['survedby']: survingemail,

      })

      db.collection('suppliers').doc(suplierid).update({
        ['survingTable']:`${name} ${index+1}`,
      })
        
      
      


    }


  }

  let handlemialdelete=()=>{
    alert(' are you sure to delete email !')
    db.collection('tables').doc(id).update({
      ['survedby']: '',
      ['survedid']:'',
      

    })
    db.collection('users').doc(bookeduserid).update({
      ['survedby']: '',

    })

    db.collection('suppliers').doc(survedid).update({
      ['survingTable']:``,
    })
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
            <td className='TableData_Survedby'>
              { bookedby?
            

            <div className='emailafter_edit'> 
              
               {/* {survedby}  */}
            {/* <input placeholder='Yet to bedecided by you' onChange={handlesurvingemail} type='email' value={editsurvemail ? survingemail:survedby}/> */}

              {!editsurvemail? <span> { survedby? survedby:

`Click edit button to select the supler`

                }
                
                </span> :
              
              <select onChange={handlesurvingemail}>
                {Array.isArray(suplier) && suplier?.map((item)=>{
                  return(
                <option key={Math.random()}>{`${item.data.email}  ${item.id} `}</option>

                  )
                })}
                
              </select>
              }
               
               {editsurvemail ?<span><UpgradeIcon onClick={onsurveupgrade} className='update_icon'/></span>:
              <span> <EditIcon  className='edit_icon' onClick={onsurvedeit}/> </span>
                }  
      <span className='email_deleteicon'>

      <Delete onClick={handlemialdelete} />
      </span>
                
                 </div>
          
            
           

          // :
          // active? 
          // <div className='surveddata_edit'>
          // <input placeholder='Yet to bedecided by you' onChange={handlesurvingemail} type='email' value={editsurvemail ? survingemail:''}/>

          // {editsurvemail? <span><UpgradeIcon onClick={onsurveupgrade} className='update_icon'/></span>: 
          // <span><EditIcon  className='edit_icon' onClick={onsurvedeit}/> </span>} 

          // </div>



:''
            
            }</td>
         </tr>
        

      </table>
    </div>
  )
}

export default TablesData
