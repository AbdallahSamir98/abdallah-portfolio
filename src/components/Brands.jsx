import React from 'react';
import Slider from 'react-slick';

export default function Brands({ data }) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="py-3 py-md-4 brand-section gray-bg">
      <div
        className="container"
        data-aos="fade"
        data-aos-duration="1200"
      >
            <div className="section-heading">
               
                  <h6>
                    <span>Skills</span>
                  </h6>
                

              </div>
        <Slider {...settings} className="slider-gap-10">
          {data.map((item, index) => (
            <div key={index}>
            
              <div className=" text-center d-flex align-items-center justify-content-center bg-white  rounded-3" style={{width:"150px",height:"150px"}}>
                <img src={item.src} alt={item.alt} className=" w-75"  />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
