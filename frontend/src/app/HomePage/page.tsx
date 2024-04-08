"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Link from "next/link";
import { link } from "fs";

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
          "http://localhost:1337/api/homepage?populate[image][fields][0]=name&populate[image][fields][1]=url&populate[sections][populate][image][fields][0]=name&populate[sections][populate][image][fields][1]=url&populate[homeProducts][populate][image]=data&populate[heroProducts][populate][image]=url&populate[homepage][populate][image]=data&populate[top_watches][populate][image]=url&populate[Top][populate][image][fields][=name&populate[Top][populate][image][fields][1]=url&populate[milus][populate][image][fields][=name&populate[milus][populate][image][fields][1]=url&populate[homepage][populate][image]=data&populate[milus_watches][populate][image]=url&populate[Celebrityimage][fields][0]=name&populate[Celebrityimage][fields][1]=url"
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
      <div className="flex flex-wrap justify-between mt-8">
        {data &&
          data.attributes &&
          data.attributes.sections &&
          data.attributes.sections.map((section: SliderItem, index: number) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2"
            >
              {section.image &&
                section.image.data &&
                section.image.data.attributes &&
                section.image.data.attributes.url && (
                  <Link href="Diver">
                    <img
                      className="w-full h-full ml-0 sm:ml-24 object-cover"
                      src={`http://localhost:1337${section.image.data.attributes.url}`}
                      alt=""
                    />
                  </Link>
                )}
            </div>
          ))}
        {data &&
          data.attributes &&
          data.attributes.Top &&
          data.attributes.Top.map((Top: SliderItem, index: number) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2"
            >
              {Top.image &&
                Top.image.data &&
                Top.image.data.attributes &&
                Top.image.data.attributes.url && (
                  <Link href="/TopWatch">
                    <img
                      className="w-full h-full ml-0 sm:ml-[-105px] object-cover"
                      src={`http://localhost:1337${Top.image.data.attributes.url}`}
                      alt=""
                    />
                  </Link>
                )}
            </div>
          ))}
      </div>

      {data &&
        data.attributes &&
        data.attributes.milus &&
        data.attributes.milus.map((milus: SliderItem, index: number) => (
          <div key={index} className=" mt-10 ">
            {milus.image &&
              milus.image.data &&
              milus.image.data.attributes &&
              milus.image.data.attributes.url && (
                <Link href="/Milus">
                  <img
                    className="w-full h-full"
                    src={`http://localhost:1337${milus.image.data.attributes.url}`}
                    alt=""
                  />
                </Link>
              )}
          </div>
        ))}
      <h1 className=" text-center font-bold text-[25px] mt-10 ">
        SHOP THE CELEBRITY LOOK
      </h1>
      {data &&
        data.attributes &&
        data.attributes.Celebrityimage &&
        Array.isArray(data.attributes.Celebrityimage.data) && (
          <div className="flex flex-wrap justify-center mt-6">
            {data.attributes.Celebrityimage.data.map(
              (image: any, index: number) => (
                <div key={index} className="mx-2 my-2">
                  {image.attributes && image.attributes.url && (
                    <img
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white"
                      src={`http://localhost:1337${image.attributes.url}`}
                      alt={image.attributes.name}
                    />
                  )}
                </div>
              )
            )}
          </div>
        )}
    </div>
  );
};

export default HomeSlider;
