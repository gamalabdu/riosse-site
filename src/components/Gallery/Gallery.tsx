import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import './styles.css'

const Gallery = () => {


  const galleryPhotos = [
    {
      count: 1,
      src : require("../../assets/photos/rio2.jpg")
    },
    {
      count: 2,
      src : require("../../assets/photos/rio3.jpg")
    },
    {
      count: 3,
      src : require("../../assets/photos/rio4.jpg")
    },
    {
      count: 4,
      src : require("../../assets/photos/rio5.jpg")
    },
    {
      count: 5,
      src : require("../../assets/photos/rio6.jpg")
    },
  ]



  return (

    <div className="gallery-container">

      {/* <div className='left-side' style={{ position:"absolute", height: "100%", left: "15%"}}>
        <div style={{height: "50%", display:"flex", justifyContent:"center", verticalAlign:"middle", alignItems:"center"}} >Galleria</div>
        <div style={{height: "50%", display:"flex", justifyContent:"center", verticalAlign:"middle", alignItems:"center"}}>Gallery</div>
      </div>

      <div className='right-side' style={{ position:"absolute", height: "100%", right: "15%"}}>
        <div style={{height: "50%", display:"flex", justifyContent:"center", verticalAlign:"middle", alignItems:"center"}}>Galerie</div>
        <div style={{ height: "50%", display:"flex", justifyContent:"center", verticalAlign:"middle", alignItems:"center"}}>Galería</div>
      </div> */}

      <Swiper 
      modules={[Navigation]}
      spaceBetween={100} 
      slidesPerView={1} 
      navigation={true} 
      className="mySwiper">
          <div className='gallery-title'>Galleria</div>
        {
          galleryPhotos.map(photo => {
            return (
              <SwiperSlide key={photo.count}><div className='carousel-photo'><img src={photo.src}/></div></SwiperSlide>
            )
          })
        }
      </Swiper>

    </div>
  )
}

export default Gallery