"use client";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Diver = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/divers?populate=*`
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
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className=" bg-black text-white py-16 px-6 text-center ">
            <h1 className="text-xl font-bold">
              EXPLORE THE UNDERWATER WITH THE BEST DIVER’S WATCHES
            </h1>
            <br />
            <p className="text-sm">By Harsh The Watch Store, Jan 09 2024</p>
          </div>
          <div className="flex justify-center items-center pt-10 pb-10 ">
            <p className="text-center w-[50%]">
              Diver's watches, also known as diving watches, are timepieces
              specifically designed for underwater diving. They are
              characterized by their water resistance, which is typically at
              least 100 meters. These watches often feature a unidirectional
              rotating bezel, which helps divers monitor their elapsed time
              underwater. Additionally, they are built to withstand the pressure
              at significant depths and usually have a luminous dial for better
              visibility in low light conditions. Their durability and
              functionality make them popular not only among divers but also
              with watch enthusiasts and adventurers. 5 of the best watches are-
            </p>
          </div>
          <div className="bg-emerald-400 text-white py-4 text-[25px] px-4 text-center ">
            Watches
          </div>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.map((item: any, index: any) => (
              <div key={index} className="p-4">
                <Link href={`/Diver/${item.attributes.slug}`}>
                  <div className="bg-gray-100 p-6 rounded-lg hover:scale-105 transition duration-300">
                    {item?.attributes?.image?.data?.[0]?.attributes?.url && (
                      <img
                        src={`http://localhost:1337${item?.attributes?.image?.data?.[0]?.attributes?.url}`}
                        alt=""
                        className="w-full h-48 object-cover"
                      />
                    )}

                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.attributes.title}
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

export default Diver;
