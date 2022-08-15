import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs  from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {

  // service_c6rtlnl is the Service id

  let submitFeedbackForm=(e)=>{
   
    e.preventDefault()
    // console.log(e.target)
    emailjs.sendForm(
      'service_c6rtlnl',
      'template_clb60op',
      e.target,
      'ETKJU0rLS80i_ct2M'
    ).then(res=>{
      console.log(res)
      toast.success('Succesfully sent the feedback', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      // alert('Succesfully sent the feedback')
      
    }).catch(error=>{
      console.log(error)
      toast.warn('Oops some thing went wrong', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    })
  }
  return (
    
    
    
    
    <div className='Footer_inside'>

{/* <footer classNameName="text-center text-lg-start"> */}
<footer className="text-center ">


  <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">

    <div className="me-5 Footer_top FooterTop_right">
      <span>Get connected with us on social networks:</span>
    </div>



    <div className="container bg-red FooterTop_left">
    <section className="mb-4 Frooter_Icons ">
 
    <a href='https://github.com/NSaiEPS/hotel_booking_react' target='_blank'><FacebookOutlinedIcon className='m-2  '/></a> 
    <a href='https://github.com/NSaiEPS/hotel_booking_react' target='_blank'><WhatsappOutlinedIcon  className='m-2 '/></a> 
    <a href='https://github.com/NSaiEPS/hotel_booking_react' target='_blank'><InstagramIcon className='m-2 '/></a> 
    <a href='https://github.com/NSaiEPS/hotel_booking_react' target='_blank'><MailOutlineRoundedIcon  className='m-2 '/></a> 
    <a href='https://github.com/NSaiEPS/hotel_booking_react' target='_blank'><GitHubIcon  className='m-2 '/></a> 
        <a href='https://github.com/NSaiEPS/hotel_booking_react' target='_blank'><TwitterIcon  className='m-2 '/></a> 
        
        
        
        
        
       
    </section>
    
  </div>

  </section>
 
  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        {/* <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>The Devi Residencies
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div> */}
        

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
           Avilable Items
          </h6>
          <p>
            <span className="text-reset">Breakfast</span>
          </p>
          <p>
            <span className="text-reset">Rise & Biryani</span>
          </p>
          <p>
            <span className="text-reset">Vej & Non-Veg</span>
          </p>
          <p>
            <span className="text-reset"> Sweet & Hot</span>
          </p>
        </div>
        

        
        {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <span href="#!" className="text-reset">Pricing</span>
          </p>
          <p>
            <span href="#!" className="text-reset">Settings</span>
          </p>
          <p>
            <span href="#!" className="text-reset">Orders</span>
          </p>
          <p>
            <span href="#!" className="text-reset">Help</span>
          </p>
        </div> */}
        

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p className='text-reset'><i className="fas fa-home me-1"></i> India , AP </p>
          <p className='text-reset' 
          
          >
            <i className="fas fa-envelope me-1"></i>
            info@deviresidencies.com
          </p>
          <p className='text-reset'><i className="fas fa-phone me-1"></i> + 91 9876543210</p>
          <p className='text-reset'><i className="fas fa-print me-1"></i> + 91 9876543210</p>
        </div>
        
      </div>
      
    </div>
  </section>
  

  
  
{/* </footer> */}




      
    
    
    
    
    
    
    
    
    
    
    
    
    
{/*   
  <div className="container p-4">
   




    <section className="Footer_email">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our Updates</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" >Email address</label>
            </div>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>

  </div> */}

<h3 
>For any Queries or Feedbacks please fill the form</h3>
  <form
  onSubmit={submitFeedbackForm}
    style={{maxWidth:'500px', marginLeft:'auto',marginRight:'auto', width:'95%'}}
  >
  <div className="form-group m-2">
    <label for="exampleFormControlInput1">Your Name</label>
    <input type="name" className="form-control col-md-5 col-12" id="exampleFormControlInput1"
     placeholder="write your name here" required name='user_name'/>
  </div>
  <div className="form-group m-2">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" 
    placeholder="write your email address here" required name='user_email'/>
  </div>

  {/* <div className="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple className="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
  <div className="form-group m-2">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"
     required name='message'/>
  </div>
  <button type='submit' className='btn btn-primary m-2'>Submit</button>
</form>

  
  <div className="text-center p-4" >
    © 2022 Copyright:
    <span className="text-reset fw-bold" > Devi Residencies</span>
  </div>
</footer>


</div>

  )
}

export default Footer


