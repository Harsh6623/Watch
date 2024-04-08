import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../css/slider.css";
import Slider from "@/components/slider";

export const getProduct = async (slug: any) => {
  try {
    const response = await axios.get(
      `http://localhost:1337/api/milus-watches?filters[slug][$eq]=${slug}&populate=*`
    );
    return response.data.data?.[0];
  } catch (error) {
    return null;
  }
};
async function Product({ params }: any) {
  const item = await getProduct(params.slug);
  console.log(item);
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:h-auto h-64 slider">
              <Slider>
                {item.attributes.image.data.map((data: any, index: number) => (
                  <img
                    className="w-[70%]"
                    src={`${process.env.NEXT_PUBLIC_API_HOST}${data.attributes.url}`}
                    alt=""
                    key={index}
                  />
                ))}
              </Slider>
            </div>
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
              <br />
              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {item.attributes.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Product;
