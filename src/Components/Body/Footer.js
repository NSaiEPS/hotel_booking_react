import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    
    
    
    
    <div className='Footer_inside'>

{/* <footer className="text-center text-lg-start"> */}
<footer class="text-center ">


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
            <span href="#!" class="text-reset">Pricing</span>
          </p>
          <p>
            <span href="#!" class="text-reset">Settings</span>
          </p>
          <p>
            <span href="#!" class="text-reset">Orders</span>
          </p>
          <p>
            <span href="#!" class="text-reset">Help</span>
          </p>
        </div> */}
        

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p className='text-reset'><i className="fas fa-home me-1"></i> India , AP </p>
          <p className='text-reset'>
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




      
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  <div class="container p-4">
   
{/* <section class="mb-4">
      <span class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></span>

      <span class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></span>

      <span class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></span>

      <span class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></span>

      <span class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></span>

      <span class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></span>
 </section> */}




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

  </div>

  
  <div class="text-center p-4" >
    © 2022 Copyright:
    <span class="text-reset fw-bold" > Devi Residencies</span>
  </div>
</footer>
</div>

  )
}

export default Footer
