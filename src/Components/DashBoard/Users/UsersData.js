import React, { useEffect, useState } from 'react'
import './Users.css'
import { db } from '../../../Firebase';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Delete } from '@material-ui/icons'
import BlockIcon from '@mui/icons-material/Block';
import DoneIcon from '@mui/icons-material/Done';

const UsersData = ({id,name,table,active,email,index,survedby,block}) => {
  let survedname=survedby.split('@')


  let handleblockuser=()=>{
    alert(' are you sure to block this User !')
    db.collection('users').doc(id).update({
      block:true
    })

   

    // db.collection('users').doc(bookeduserid).update({
    //   ['survedby']: '',
    //   ['table']:'',
    //   ['active']:'',

    // })

    // db.collection('suppliers').doc(survedid).update({
    //   ['survingTable']:``,
    // })
// db.collection('tables').doc(id).update({
//           ['active']: '',
//           ['bookedby']:'',
//           ['bookeduserid']:'',
//           ['bookeremail']:'',
//         })

       


  }
let handleunblockuser=()=>{
  db.collection('users').doc(id).update({
    block:false
  })
}





  let [userinfo,setUserinfo]=useState([])

        useEffect(()=>{
          // db.collection('users').doc(id).collection('history').orderBy('timestamp','') .onSnapshot((snapshot)=>{
            db.collection('users').doc(id).collection('history') .onSnapshot((snapshot)=>{
            setUserinfo(snapshot.docs.map((doc)=>({
                
                id:doc.id,
                data:doc.data(),
              
            })))
          }) ;
     
        
      
      
      },[id])


      let [moreinfoon,setMoreinfo]=useState(false)

      let handlemoreinfo=()=>{
        setMoreinfo(!moreinfoon)
      }

  return (
    <div className='UsersData'>
        <div className='usersData_inside'>



        <table className='UserData_table'>
            <tr>
              
            <td className='UserData_name'>{name}</td>
              <td className='UserData_tablenumb'>{table?table:'not yet' }</td>
                
              <td className='UserData_Active'>{active ? <button>Yes</button>:'-'}</td>

                
                <td className='UserData_Survedby'>{survedby ?
                <div>
                  <span className='UserData_Survedby_name'>{survedname[0]}</span>

                  <span className='UserData_Survedby_email'>{survedname}</span>
                  
                </div>
                
                
                :'Yet to be decided by you' }</td>
                <td className='UserData_email'>{email}</td>

                </tr>
        </table>


   <div className='UserData_forphones'>
        <table className=''>
          <tr>
            <div>
              <td>
                Name
              </td>
            <td className='UserData_name'>{name}</td>

            </div>
            <div>
              <td>Table booked</td>
              <td className='UserData_tablenumb'>{table?table:'not yet' }</td>

            </div>

            <div>
              <td>active</td>
              <td className='UserData_Active'>{active ? <button>Yes</button>:'-'}</td>

            </div>

            <div>
              <td>Survedby</td>
              <td className='UserData_Survedby'>{survedby ?
                <div>
                  <span className='UserData_Survedby_name'>{survedname[0]}</span>

                  <span className='UserData_Survedby_email'>{survedname}</span>
                  
                </div>
                
                
                :'Yet to be decided by you'}</td>
            </div>

            <div>
              <td>email</td>
              <td className='UserData_email'>{email}</td>

            </div>
            
{/* <div>
  <button onClick={handledeleteUser}>Delete this User</button>
</div> */}
          </tr>

        </table>
        <div className='UserData_Moreinfo'>
          <div className='UserData_Moreinfo_info'>
            <div>
          {userinfo.length >0 && <span >More info</span> }
          {userinfo.length >0 && <div>
          {moreinfoon? 
          <span onClick={handlemoreinfo}
          ><ArrowDropUpIcon/></span> :
          <span onClick={handlemoreinfo}
          >
            <ArrowDropDownIcon/>
          </span>}
          
          </div>
           }

</div>
{block? <span className='Userdata_userunblock'>  <DoneIcon onClick={handleunblockuser}/> unblock the user!</span>:<div> 
            <span><BlockIcon onClick={handleblockuser}/> </span>
           <span>  Block the user</span>
            </div>}
          
           </div>

           <div className='UserData_Moreinfo_table'>
         
          {  Array.isArray(userinfo) && moreinfoon && userinfo?.map((item)=>{
            return(
              <div key={Math.random()} className='UserData_Moreinfo_table_data' >
                <div>
                  <span><b>Table</b></span>
                  <span>
                {item.data.table}

                  </span>
                  </div>
                  <div>
                  <span><b>booking status</b></span>
                  <span>
                {item.data.status}

                  </span>
                    </div>

                    <div>
                  <span><b>Time</b></span>
                  <span>
                  {/* timestamp:timestamp,
    showtime:showtime */}
                {item.data.showtime ?item.data.showtime: ':' }
          {/* stamp */}

                  </span>
                    </div>
                </div>
            )
          })

          }

</div>


        </div>
        </div>
        </div>
      
    </div>
  )
}

export default UsersData
