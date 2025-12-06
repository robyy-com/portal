"use client";
import { Category, Product } from "@/types/types";
import { fetchProducts } from "@/utils/apiServices";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "./product/ProductCard";
import SectionTitle from "./SectionTitle";

const SliderComponent = Slider as unknown as React.ComponentType<any>;

const TrendingProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
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
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setData(Array.isArray(products) ? products : []);
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
      <div className="pt-10">
        <SectionTitle
          title="Trending Products"
          shortDesc="Discover all exciting products"
        />

        <SliderComponent {...settings} className="tending-slide">
          {Array.isArray(data) &&
            data?.slice(0, 10)?.map((product: Product, index: number) => (
              <div className=" px-3" key={product.Id}>
                <ProductCard product={product} />
              </div>
            ))}
        </SliderComponent>
      </div>
    </div>
  );
};

export default TrendingProducts;
