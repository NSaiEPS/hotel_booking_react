import React from 'react'

const FuaturedItems = () => {
  return (
    <div className='FuaturedItems'>
       <div id="carouselExampleDark" class="carousel carousel-dark slide " data-bs-ride="carousel">
  <div class="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img  className='Body_carousel_imgs'
       src="https://foodfinger.in/wp-content/uploads/2021/04/Tandoori-Chicken-Biryani-scaled.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="bg-primary">Tandoori chicken biryani</h5>
        <p class="bg-success">Special Tandoori chicken biryani with extra spicy</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img 
      className='Body_carousel_imgs'
      src="https://imgk.timesnownews.com/story/veg-thali.gif" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="bg-primary">Special South Indian Thali</h5>
        <p class="bg-success">Special South Indian Thali which consists of delicious curries</p>
      </div>
    </div>
    <div class="carousel-item">
      <img className='Body_carousel_imgs'
       src="https://i0.wp.com/www.nandanmsd.com/wp-content/uploads/2020/08/Paper-Sada-Dosa.jpg?fit=720%2C405&ssl=1" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="bg-primary">Special Dosa</h5>
        <p class="bg-success">Special Dosa which can fill your stomack!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img className='Body_carousel_imgs'
       src="https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1660752256.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="bg-primary">Special Curries</h5>
        <p class="bg-success">Special Curries with diffrent tastes!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.thillaismasala.com/wp-content/uploads/2022/04/Fish-Biryani-1200x900.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="bg-primary" >Special Fish Biryani</h5>
        <p class="bg-success">Special Fish Biryani the taste you never going to forget!</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-success" aria-hidden="true"></span>
    <span class="visually-hidden bg-primary">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-success" aria-hidden="true"></span>
    <span class="visually-hidden bg-primary">Next</span>
  </button>
</div>
    </div>
  )
}

export default FuaturedItems
