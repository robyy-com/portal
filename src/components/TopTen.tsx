"use client";
import { fetchProducts } from "@/utils/apiServices";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./product/ProductCard";
import { Product } from "@/types/types";

const SliderComponent = Slider as unknown as React.ComponentType<any>;
const TopTen = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [data, setData] = useState<Product[] | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setData(products);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        //
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 ">
          <div className=" xl:col-span-2 flex items-center leading-9 font-semibold text-textColor text-center text-2xl xl:text-[30px]">
            <h3>Top 10 Selected Products On the Week</h3>
          </div>
          <div className=" xl:col-span-10">
            <SliderComponent {...settings} className="top-ten-slide">
              {data &&
                data?.length > 0 &&
                data?.slice(0, 10)?.map((product: Product, index: number) => (
                  <div className=" px-3" key={product.Id}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </SliderComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTen;
