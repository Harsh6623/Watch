"use client";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TopWatch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/top-watches?populate=*`
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
        <img src="/image/top-1.jpg" alt="" />
        <div className="container px-5 py-10 mx-auto">
          <div className=" bg-black text-white py-16 px-6 text-center ">
            <h1 className="text-xl font-bold">TOP 15 WATCH LAUNCHES OF 2023</h1>
            <br />
            <p className="text-sm">By Harsh The Watch Store, Jan 30 2024</p>
          </div>
          <div className="flex justify-center items-center pt-10 pb-10 ">
            <p className="text-center w-[50%]">
              Helios celebrates 15 years of exceptional timekeeping by
              presenting the top 15 watch launches of 2023, a year that has
              truly redefined the art of horology. These watches are not just
              timekeepers; they are symbols of innovation, merging timeless
              elegance with cutting-edge technology.Each model in our selection
              stands out for its unique design, unparalleled craftsmanship, and
              the story it tells. From classic, sophisticated designs to modern,
              tech-savvy marvels, this year's lineup offers something for every
              connoisseur of fine watches. So, let’s check out the watches-
            </p>
          </div>
          <div className="bg-emerald-400 text-white py-4 text-[25px] px-4 text-center ">
            Watches
          </div>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.map((item: any, index: any) => (
              <div key={index} className="p-4">
                <Link href={`/TopWatch/${item.attributes.slug}`}>
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

export default TopWatch;
