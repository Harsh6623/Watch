"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
const HomePage = () => {
  const [images, setImages] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/homepage?populate=*"
        );
        if (response && response.data && response.data.data) {
          setImages(response.data.data.image.data);
          console.log(response);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="header">
      <div className="overflow-hidden max-h-[575px]">
        <Slider {...settings}>
          {images.map((image: any) => (
            <div key={image.id}>
              <img
                src={`http://localhost:1337${image.attributes.url}`}
                alt=""
                className="w-full h-auto bg-center rounded-lg mt-8"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default HomePage;
