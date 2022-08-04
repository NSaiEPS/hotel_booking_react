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
          </tr>

        </table>
        </div>
        </div>
      
    </div>
  )
}

export default UsersData
