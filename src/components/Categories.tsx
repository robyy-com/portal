"use client";
import { Category } from "@/types/types";
import { fetchCategories } from "@/utils/apiServices";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import catagory from "../../public/images/Caregories/img3-middle.png";
import SectionTitle from "./SectionTitle";
import Button from "./ui/Button";

const SliderComponent = Slider as unknown as React.ComponentType<any>;

const Categories = () => {
  const [data, setData] = useState<Category[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await fetchCategories();
        setData(categories);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        //
      }
    };

    fetchData();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
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
          nextArrow: <IoIosArrowDropright className=" text-black" />,
          prevArrow: <IoIosArrowDropleft />,
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

  return (
    <section className="section-gap container mx-auto">
      <SectionTitle
        title="CATEGORIES"
        shortDesc="Discover many new and exciting products"
      />

      <SliderComponent {...settings} className="category-slide">
        {data &&
          data?.map((item: Category, index: number) => (
            <Link href="/products" key={index}>
              <div key={index} className=" px-3">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-center items-center pb-4">
                  <div className="w-full">
                    <Image
                      src={item.categoryImg || catagory}
                      alt="category image"
                      className="w-full"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="mt-4 text-gray-800 text-[30px] font-semibold line-clamp-1">
                      {item.categoryName}
                    </h4>
                    <p className=" mt-1 text-secondaryColor">
                      {item?.totalProd} Products
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </SliderComponent>

      <div className=" text-center flex justify-center mt-8">
        <Link href="/category">
          <Button isIcon={true} title="More Categories" />
        </Link>
      </div>
    </section>
  );
};

export default Categories;
