import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../Firebase'
import { Selectbookingorderdetails, Selectchek, Selectloginsuplier, Selectorderprice, SelectTheme } from '../../Redux/Redux_Slice'
import './Orders.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import OrderItems from './OrderItems'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import MicOffIcon from '@mui/icons-material/MicOff';
import { toast } from 'react-toastify'

const Orders = () => {
  let orderdetails = useSelector(Selectbookingorderdetails)
  let supliername = useSelector(Selectloginsuplier)
  // let selectorderprice=useSelector(Selectchek)

  let { bookeduserid, tableid, tablenumb, bookername } = orderdetails;
  const navigate = useNavigate()
  let dispatch = useDispatch()
  let selecttheme = useSelector(SelectTheme)



  // console.log(bookeduserid,tableid,tablenumb,bookername)
  let [orders, setOrders] = useState({

  })

  let len = 0;
  useEffect(() => {
    db.collection('tables').doc(tableid).collection('orders').onSnapshot((snapshot) => {
      setOrders(snapshot.docs.map((doc) => ({

        id: doc.id,
        data: doc.data(),

      })))

      console.log(len)
    });

    len = 1;

  }, [])


//   let a1 = [1, [5, 8, 3], 7];
//   let a2 = [1, 5, 8, 3, 7, 896, 89];
//   let b = [...a1, ...a2]
//   console.log(b)
//   let a3=a1.flat(1)
//   console.log(a3)

//   let myname='Nsai'
//   let name=()=>{
//     //  myname='Sai'
//     let fulname=()=>{
//       console.log(myname)
//     }
//     fulname()
//   } name()

// let a=[{s:'dsd',fd:'dfds'}]
// let [as,afd]=[{...a}]
// console.log(as,afd)
  // let itemprice=0;
  // console.log(len)
  // if(len===1){
  //  orders?.map((items,indx)=>{
  //  console.log(items.data.price)

  //      itemprice=(+(items.data.price)+itemprice)
  //      dispatch(

  //        totalorderprice(
  //          itemprice

  //        ))

  //  })
  //  len=0;

  // }


  let [input, setInput] = useState({
    ordername: '',
    ordervalue: ''
  })



  let handleinput = (e) => {

    let nam, val;
    nam = e.target.name;
    val = e.target.value
    setInput({
      ...input,
      [nam]: val
    })
    if (nam === 'ordervalue') {
      if (val < 1) {
        alert('order value must be atleast 1!')
      }
    }
    // console.log(input.ordername, input.ordervalue)
  }



  // console.log(window.location.pathname)
  // if(window.location.pathname==='/user/orders') {
  // if(!bookername){
  //     alert('reloadeed')
  //     navigate('/')
  //     alert('Oops some thing went wrong go back & click your orders')}}



  if (!tableid) {
    navigate('/')
  }

  // window.location.reload(false)
  // if(window.location.reload(false)){
  //     navigate('/')
  // }

  let [micopen, setMicopen] = useState(true)

  let {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition();

  let [language, setLanguage] = useState(
    {
      code: 'te',
      name: 'telugu'
    })

  let handlemiconclicked = () => {
    alert('Mic is on, please speck to record')
    setMicopen(false)

    // let language='en'
    SpeechRecognition.startListening({
      continuous: true,
      language: language.code,
    })



  }

  let handlemicoffclicked = () => {
    alert('Mic is off now')
    setMicopen(true)
    SpeechRecognition.stopListening()
  }
  // const { transcript } = useSpeechRecognition()




  let handleaddOrders = (e) => {
    e.preventDefault()
    if (input.ordername && transcript) {
      alert('please clear the mic or typed input to order the items')
    }
    else {
      let ordername;

      if (input.ordername) {

        ordername = input.ordername
      }
      if (transcript) {
        ordername = transcript
      }
      db.collection('tables').doc(tableid).collection('orders').add({
        name: ordername,
        noofitems: input.ordervalue,
        price: ''


      })

      toast.success('Succesfully added the order', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });



      SpeechRecognition.stopListening()
      setMicopen(true)

      resetTranscript()
      setInput({
        ...input, ordername: '', ordervalue: ''
      })
    }
  }


  let handlelanguagechange = (e) => {
    console.log(e.target.value)
    let targeted = (e.target.value)
    console.log(targeted.split(' '))
    let targetteddata = targeted.split(' ');
    console.log(targetteddata);
    setLanguage({
      ...input,
      code: targetteddata[1],
      name: targetteddata[0]
    })


  }




  // let [totalprice,setTotalprice]=useState(0)

  // let itemprice=0;
  // { Array.isArray(orders) && 
  //   orders?.map((items,indx)=>{
  //   console.log(items.data.price)

  //       itemprice=(+(items.data.price)+itemprice)
  //       dispatch(
  //         totalorderprice(
  //           itemprice'

  //         ))

  //   })

  //   }

  // console.log(itemprice)
  // setTotalprice(itemprice)




  return (
    <div className={(selecttheme === 'light' ? 'Orders' : 'Orders Orders_dark')} >
      {(!tableid) && <Alert variant="filled" severity="error">
        Some thing went wrong please go back & come again
      </Alert>
      }

      <h3>Hello {supliername ?
        <span>Suplier {supliername} </span>
        : bookername ? `'${bookername}'`: 'user'} this is your
        {supliername ? ` supliying  ${tablenumb} ` : ` order booking page ${tablenumb}`} </h3>
      <div className={(!tableid) ? 'Orders_goback_div_message' : 'Orders_goback_div'}>
        <button> <Link to='/'>Go back</Link></button></div>


      <div className='Orders_inside'>



        <div className={selecttheme === 'light' ? 'Ordering_input' : 'Ordering_input Ordering_input_dark'}>
          <div><form onSubmit={handleaddOrders}>
            <input placeholder='Enter your orders here...' type='text'
              // value={(!micopen) ? transcript:input.ordername } name='ordername'
              value={input.ordername} name='ordername'
              onChange={handleinput}
            />


            <input placeholder='no.of items' type='number' value={input.ordervalue} name='ordervalue' onChange={handleinput} />
            {((input.ordername || transcript) && input.ordervalue > 0) && (tableid) &&
              <button type='submit'

              >Add</button>

            }
          </form></div>



          <div className='mic_part'>
            <div> 
             
              <input placeholder={`Use Mic to enter in ${language.name}`} value={transcript} />



            
            <div className='mic_part_mic_same'>   {(!micopen) ? <span className='micoofficon'>
              <MicOffIcon onClick={handlemicoffclicked} /></span>
              : <span className='micoonicon'> <MicOutlinedIcon onClick={handlemiconclicked} /></span>}



              {transcript && <button onClick={() => {
                resetTranscript()

              }}>Clear</button>}</div>
            


            </div>


            <div className='mic_part_mic'>   {(!micopen) ? <span className='micoofficon'>
              <MicOffIcon onClick={handlemicoffclicked} /></span>
              : <span className='micoonicon'> <MicOutlinedIcon onClick={handlemiconclicked} /></span>}



              {transcript && <button onClick={() => {
                resetTranscript()

              }}>Clear</button>}</div>
            <div>

              <select onChange={handlelanguagechange}>
                <option>Telugu te</option>
                <option>English en</option>
                <option>Hindi hi</option>
                <option>Tamil ta</option>
                <option>Kannada kn</option>
              </select>
            </div>

          </div>

        </div>

        {/* name:input.ordername,
        noofitems:input.ordervalue,
        price:'' */}
        {orders?.length > 0 &&
          <div className='Orders_OrderItems_scrollbar'>
            <div className='Orders_OrderItems'>
              <table>
                <th>Name</th>
                <th>No.of items</th>
                <th>Update</th>

                <th>Delete</th>
                <th>Price</th>

              </table>
              {Array.isArray(orders) &&
                orders?.map((items, indx) => {
                  return (
                    <div key={Math.random()}>
                      <OrderItems orderid={items.id} ordername={items.data.name}
                        noofitems={items.data.noofitems} price={items.data.price} index={indx}
                        tableid={tableid}
                      />
                    </div>
                  )
                })

              }

              {/* <p>Total price <small className='rupeicon'>₹</small> <span><b> */}
              {/* {selectorderprice && selectorderprice} */}
              {/* totla price here
              </b></span> </p> */}

            </div>
          </div>}

      </div>

      {/* <div className='reload_info'>
            <span>{`Oops something we wrong please go back & come again`}</span>
        </div> */}

    </div>
  )
}

export default Orders
