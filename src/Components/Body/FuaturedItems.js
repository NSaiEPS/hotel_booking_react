import React from 'react'

const FuaturedItems = () => {
  return (
    <div className='FuaturedItems'>
       <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
  <div className="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img  
       src="https://www.iwmbuzz.com/wp-content/uploads/2021/02/prepare-this-delicious-chicken-tandoor-biryani-at-home-with-these-simple-recipes-5-920x518.jpg"  className="d-block w-100 Body_carousel_imgs" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="bg-primary">Tandoori chicken biryani</h5>
        <p className="bg-success">Special Tandoori chicken biryani with extra spicy</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img 
      
      src="https://imgk.timesnownews.com/story/veg-thali.gif" className="d-block w-100 Body_carousel_imgs" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="bg-primary">Special South Indian Thali</h5>
        <p className="bg-success">Special South Indian Thali which consists of delicious curries</p>
      </div>
    </div>
    <div className="carousel-item">
      <img 
       src="https://i0.wp.com/www.nandanmsd.com/wp-content/uploads/2020/08/Paper-Sada-Dosa.jpg?fit=720%2C405&ssl=1" className="d-block w-100 Body_carousel_imgs" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="bg-primary">Special Dosa</h5>
        <p className="bg-success">Special Dosa which can fill your stomack!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img 
       src="https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1660752256.jpg" className="d-block w-100 Body_carousel_imgs" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="bg-primary">Special Curries</h5>
        <p className="bg-success">Special Curries with diffrent tastes!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/736x/6a/5b/5d/6a5b5d5405918a904b87183fce1a4e0b.jpg" className="d-block w-100 Body_carousel_imgs" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="bg-primary" >Special Fish Biryani</h5>
        <p className="bg-success">Special Fish Biryani the taste you never going to forget!</p>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
  <span className="carousel-control-prev-icon bg-success" aria-hidden="true"></span>
    <span className="visually-hidden bg-primary">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-success" aria-hidden="true"></span>
    <span className="visually-hidden bg-primary">Next</span>
  </button>
</div>
    </div>
  )
}

export default FuaturedItems
