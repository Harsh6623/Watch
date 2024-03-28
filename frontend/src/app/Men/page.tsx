"use client";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Men = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/products?populate=*`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  ``;

  return (
    <div>
      <img src="/image/m-head.png" alt="" className="w-full" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.map((item: any, index) => (
              <div key={index} className="p-4">
                <Link href={`/Product/${item.attributes.slug}`}>
                  <div className="bg-gray-100 p-6 rounded-lg hover:scale-105 transition duration-300">
                    <img
                      className="h-60 rounded w-full object-cover object-center mb-6"
                      src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.attributes.subtitle}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {item.attributes.description}
                    </h2>
                    <p>{item.attributes.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Men;
