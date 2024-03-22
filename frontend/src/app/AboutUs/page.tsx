"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "http://localhost:1337/api/about-uses?populate=*"
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
      <div>
        <section className="bg-gray-100">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                {data?.map((item: any, index: number) => (
                  <>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl"></h2>
                    <p className="mt-4 text-gray-600 text-lg"></p>
                    <div className="mt-8"></div>
                  </>
                ))}
              </div>
              <div className="mt-12 md:mt-0"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
