"use client";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Couple: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/couples?populate=*`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <img src="/image/c-head.jpg" alt="" className="w-full" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.map((item: any, index) => (
              <div key={index} className="p-4 h-full">
                <Link href={`/Couple/${item.attributes.slug}`}>
                  <div className="bg-gray-100 p-6 rounded-lg hover:scale-105 transition duration-300 flex flex-col justify-between">
                    {item?.attributes?.image?.data?.[0]?.attributes?.url && (
                      <img
                        src={`http://localhost:1337${item?.attributes?.image?.data?.[0]?.attributes?.url}`}
                        alt=""
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div>
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        {item.attributes.title}
                      </h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        {item.attributes.description}
                      </h2>
                      <p>{item.attributes.price}</p>
                    </div>
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

export default Couple;
