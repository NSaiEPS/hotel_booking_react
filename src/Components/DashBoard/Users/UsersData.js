import React from 'react'

const UsersData = ({id,name,table,active,email,index,survedby}) => {
  return (
    <div className='UsersData'>
        <div className='usersData_inside'>



        <table className='UserData_table'>
            <tr>
                <td>{name}</td>
                <td>{table?table:'not yet' }</td>
                <td>{active ? <button>Yes</button>:'-'}</td>
                <td>{survedby ? survedby:'Yet to be decided by you'}</td>
                <td>{email}</td>

                </tr>
        </table>

        </div>
      
    </div>
  )
}

export default UsersData
