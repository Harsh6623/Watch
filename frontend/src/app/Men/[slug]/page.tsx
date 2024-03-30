"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Product = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [item, setItem] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=*`
        );
        if (response.data.data.length > 0) {
          setItem(response.data.data[0]);
        } else {
          setItem(null);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [slug]);
  return (
    <div>
      {item ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {item.attributes.title}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {item.attributes.header}
                </h1>
                <div className="flex mb-4">
                  <span className="text-gray-600">
                    {item.attributes.watchnumber}
                  </span>
                </div>
                <p className="leading-relaxed">{item.attributes.information}</p>
                <div className="flex items-center">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {item.attributes.price}
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:h-auto h-64">
                <Slider autoplay={true} autoplaySpeed={3000}>
                  {Array.isArray(item?.attributes?.image) ? (
                    item.attributes.image.map((image: any, index: number) => (
                      <div key={index}>
                        <img
                          src={`http://localhost:1337${image?.url}`}
                          alt=""
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ))
                  ) : (
                    <div>No images available</div>
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Product;
