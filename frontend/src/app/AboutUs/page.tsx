"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const AboutMe = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/about-uses?populate=*`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="bg-white bg-opacity-75">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {data.map((item: any, index) => (
            <div
              key={index}
              className="my-10 sm:flex sm:items-center sm:justify-between"
            >
              <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  {item.attributes.Title}
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  {item.attributes.Description}
                </p>
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-6">
                <img
                  className="w-full h-auto rounded-lg shadow-2xl"
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
