import React from "react";
import axios from "axios";

export const getProduct = async (slug: any) => {
  try {
    const response = await axios.get(
      `http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=*`
    );
    return response.data.data?.[0];
  } catch (error) {
    return null;
  }
};

async function ProductSlider({ params }: any) {
  const item: any = await getProduct(params.slug);
  console.log(item);

  return (
    <>
      {item.attributes.image.data.map((data: any, index: number) => (
        <div key={index} className="slide">
          <img
            className="w-[70%]"
            src={`${process.env.NEXT_PUBLIC_API_HOST}${data.attributes.url}`}
            alt=""
          />
        </div>
      ))}
    </>
  );
}

export default ProductSlider;
