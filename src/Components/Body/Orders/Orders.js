import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../../Firebase'
import { Selectbookingorderdetails, SelectUserbookingnum } from '../../Redux/Redux_Slice'
import './Orders.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import OrderItems from './OrderItems'



const Orders = () => {
let orderdetails=useSelector(Selectbookingorderdetails)
let{bookeduserid,tableid,tablenumb,bookername}=orderdetails;
const navigate = useNavigate()

// console.log(bookeduserid,tableid,tablenumb,bookername)
    let [orders,setOrders]=useState({

    })

    useEffect(()=>{
        db.collection('tables').doc(tableid).collection('orders').onSnapshot((snapshot)=>{
        setOrders(snapshot.docs.map((doc)=>({
            
            id:doc.id,
            data:doc.data(),
          
        })))
      }) ;
    
      let len=orders.length;
    
  
  },[])




let [input,setInput]=useState({
    ordername:'',
    ordervalue:''
})


let handleinput=(e)=>{
    
    let nam,val;
    nam=e.target.name;
    val=e.target.value
    setInput({
        ...input,
        [nam]:val
    })
    if(nam==='ordervalue'){
        if(val<1){
            alert('order value must be atleast 1!')
        }
    }
    // console.log(input.ordername, input.ordervalue)
}

let handleaddOrders=(e)=>{
    e.preventDefault()

    db.collection('tables').doc(tableid).collection('orders').add({
        name:input.ordername,
        noofitems:input.ordervalue,
        price:''
        
    
      })
      setInput({
        ...input,ordername:'',ordervalue:''
      })

}
// console.log(window.location.pathname)
// if(window.location.pathname==='/user/orders') {
// if(!bookername){
//     // alert('reloadeed')
//     // navigate('/')
//     alert('Oops some thing went wrong go back & click your orders')

// }
// }



if(!tableid){
    navigate('/')
}

  return (
    <div className='Orders'>
        {(!tableid)&& <Alert variant="filled" severity="error">
  Some thing went wrong please go back & come again
</Alert>
}
    
        <h3>Hello {bookername} this is your order booking page {tablenumb}</h3>
        <div className={(!tableid)? 'Orders_goback_div_message': 'Orders_goback_div'}>
       <button> <Link to='/'>Go back</Link></button></div>


        <div className='Orders_inside'>



           <div className='Ordering_input'>
            <form onSubmit={handleaddOrders}>
                <input placeholder='type your orders here...' type='text' value={input.ordername} name='ordername'
                onChange={handleinput}
                />
                <input placeholder='no.of items' type='number'   value={input.ordervalue} name='ordervalue' onChange={handleinput}/>
               { (input.ordername && input.ordervalue>0)&& (tableid)&& <button  type='submit'
               >Add</button>

               } 
            </form>

           </div>

           {/* name:input.ordername,
        noofitems:input.ordervalue,
        price:'' */}
           {orders?.length>0 &&
           <div className='Orders_OrderItems'>
            { Array.isArray(orders) && 
            orders?.map((items,indx)=>{
                return(
                    <div key={Math.random()}>
                        <OrderItems  orderid={items.id} ordername={items.data.name}
                        noofitems={items.data.noofitems} price={items.data.price} index={indx}
                        tableid={tableid}
                        />
                        </div>
                )
            })

            }

           </div>}

        </div>

        {/* <div className='reload_info'>
            <span>{`Oops something we wrong please go back & come again`}</span>
        </div> */}
      
    </div>
  )
}

export default Orders
