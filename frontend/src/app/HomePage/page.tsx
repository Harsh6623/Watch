"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Link from "next/link";

const HomeSlider = () => {
  const [data, setData] = useState<any>(null);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/homepage?populate[image][fields][0]=name&populate[image][fields][1]=url&populate[sections][populate][image][fields][0]=name&populate[sections][populate][image][fields][1]=url&populate[homeProducts][populate][image]=data&populate[heroProducts][populate][image]=url"
        );
        setData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  type SliderItem = {
    sections: any;
    attributes: any;
    title: string;
    description: string;
    image?: any;
  };

  return (
    <div className="header">
      <div className="overflow-hidden max-h-[575px] container mx-auto xl:mx-w-[1180px]">
        <Slider {...settings}>
          {data &&
            data.attributes &&
            data.attributes.image &&
            data.attributes.image.data.map(
              (item: SliderItem, index: number) => (
                <div key={index}>
                  {item.attributes && item.attributes.url && (
                    <img
                      className="w-full h-auto bg-center rounded-lg mt-8"
                      src={`http://localhost:1337${item.attributes.url}`}
                      alt=""
                    />
                  )}
                </div>
              )
            )}
        </Slider>
      </div>
      {data &&
        data.attributes &&
        data.attributes.sections &&
        data.attributes.sections.map((section: SliderItem, index: number) => (
          <div key={index}>
            {section.image &&
              section.image.data &&
              section.image.data.attributes &&
              section.image.data.attributes.url && (
                <Link href="/Diver">
                  <img
                    className="w-[40%] h-[40%] mt-8 ml-28"
                    src={`http://localhost:1337${section.image.data.attributes.url}`}
                    alt=""
                  />
                </Link>
              )}
          </div>
        ))}
    </div>
  );
};

export default HomeSlider;
