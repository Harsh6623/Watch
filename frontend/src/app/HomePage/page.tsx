"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

const HomeSider = () => {
  const [data, setData] = useState<any>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/homepage?populate=*"
        );
        setData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="header">
      <div className="max-h-[575px] container mx-auto xl:mx-w-[1180px]">
        <Slider {...settings}>
          {data &&
            data.attributes &&
            data.attributes.sections &&
            data.attributes.sections.map((section: any, index: number) => (
              <div key={index}>
                {section.attributes && section.attributes.image && (
                  <img
                    className="w-full h-auto bg-center rounded-lg mt-8"
                    src={`http://localhost:1337${section.attributes.image.data.attributes.url}`}
                    alt=""
                  />
                )}
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};
export default HomeSider;
