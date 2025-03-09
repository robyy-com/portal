"use client";
import Image from "next/image";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Slider from "react-slick";
import clientimage from "../../public/images/client.png";

const SliderComponent = Slider as unknown as React.ComponentType<any>;

const CustomerReview = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <div style={{ display: "none" }}></div>,
    prevArrow: <div style={{ display: "none" }}></div>,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="xl:grid xl:grid-cols-4 gap-4 p-4 xl:py-10">
      <div className="xl:col-span-1  p-4">
        <div>
          <p>Customer review</p>
          <h3 className="xl:text-[48px] text-2xl font-bold xl:leading-[56px]  mb-4">
            We love our client
          </h3>
          <Image src={clientimage} alt="missing iamge" />
        </div>
      </div>
      <div className="xl:col-span-3 bg-[#343434]  text-white xl:p-4 rounded-md xl:px-5">
        <SliderComponent {...settings}>
          <div className=" text-center">
            <div className=" flex justify-center">
              <BiSolidQuoteAltRight size={50} />
            </div>
            <p className="xl:p-5">
              Great Service and Good Quality Product and it helped my wife
              osteoarthritis on her knees and hips and myself for arthritis. We
              have asked our doctor before we used it he said it is fine because
              we are on other medications. We have recommended to our friends
              and family in United States they have order and have been using
              Rumatis Cream
            </p>
            <p>Name</p>
          </div>
          <div className=" text-center xl:px-5">
            <div className=" flex justify-center">
              <BiSolidQuoteAltRight size={50} />
            </div>
            <p className="xl:p-5">
              Great Service and Good Quality Product and it helped my wife
              osteoarthritis on her knees and hips and myself for arthritis. We
              have asked our doctor before we used it he said it is fine because
              we are on other medications. We have recommended to our friends
              and family in United States they have order and have been using
              Rumatis Cream
            </p>
            <p>Name</p>
          </div>
          <div className=" text-center xl:px-5">
            <div className=" flex justify-center">
              <BiSolidQuoteAltRight size={50} />
            </div>
            <p className="xl:p-5">
              Great Service and Good Quality Product and it helped my wife
              osteoarthritis on her knees and hips and myself for arthritis. We
              have asked our doctor before we used it he said it is fine because
              we are on other medications. We have recommended to our friends
              and family in United States they have order and have been using
              Rumatis Cream
            </p>
            <p>Name</p>
          </div>
        </SliderComponent>
      </div>
    </div>
  );
};

export default CustomerReview;
