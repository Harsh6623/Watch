"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "react-slick";
import axios from "axios";

const Slider = () => {
  const [data, setData] = useState<any>(null);
  const slide = {
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
      const data = await axios.get(
        "http://localhost:1337/api/sliders?populate=*"
      );
      let response = data.data.data;
      setData(response);
      console.log(response);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="header">
        <div className="overflow-hidden max-h-[575px]">
          <Sliders {...slide}>
            {data?.map((item: any, index: number) => {
              return (
                <>
                  <div key={item.index}>
                    <img
                      className="w-full h-auto bg-center rounded-lg mt-8"
                      src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                      alt=""
                    />
                  </div>
                </>
              );
            })}
          </Sliders>
        </div>
      </div>
    </>
  );
};
export default Slider;
