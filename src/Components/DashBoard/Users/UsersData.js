import React from 'react'
import './Users.css'

const UsersData = ({id,name,table,active,email,index,survedby}) => {
  let survedname=survedby.split('@')
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
                
                
                :'Yet to be decided by you'}</td>
                <td className='UserData_email'>{email}</td>

                </tr>
        </table>

        </div>
      
    </div>
  )
}

export default UsersData
