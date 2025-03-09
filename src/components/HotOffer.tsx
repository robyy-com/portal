"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import ProductCard from "./product/ProductCard";

const HotOffer = () => {
  var settings = {
    dots: true,
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
  return (
    <div className="py-10">
      <div className=" flex items-center justify-between">
        <h2 className=" flex  gap-3 items-center font-bold uppercase text-2xl	 xl:text-[35px]">
          {" "}
          <svg
            width="27"
            height="31"
            viewBox="0 0 27 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5003 3.1C18.2467 4.26855 17.1149 5.49705 16.112 6.731C14.4691 4.45746 12.4321 2.15123 10.125 0C4.20308 5.52006 0 12.7124 0 17.05C0 24.7546 6.04426 31 13.5 31C20.9557 31 27 24.7546 27 17.05C27 13.8247 23.8673 7.17238 19.5003 3.1ZM18.3269 23.7253C17.0215 24.6432 15.4117 25.1875 13.6724 25.1875C9.32404 25.1875 5.78571 22.297 5.78571 17.604C5.78571 15.2663 7.25083 13.2065 10.1726 9.6875C10.5903 10.1707 16.1289 17.2764 16.1289 17.2764L19.6624 13.2271C19.9119 13.6418 20.1391 14.0475 20.3416 14.4362C21.9899 17.5961 21.2944 21.6395 18.3269 23.7253Z"
              fill="#FF7020"
            />
          </svg>{" "}
          Hot Offer!{" "}
        </h2>
        <div className=" flex gap-2">
          <IoIosArrowBack size={20} />
          <IoIosArrowForward size={20} />
        </div>
      </div>
      <div>
        {/* <Slider {...settings}>
          <ProductCard hotOffer={true} />
          <ProductCard hotOffer={true} />
          <ProductCard hotOffer={true} />
          <ProductCard hotOffer={true} />
        </Slider> */}
      </div>
    </div>
  );
};

export default HotOffer;
