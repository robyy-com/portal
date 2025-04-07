"use client";

import { ProductImage } from "@/types/types";
import Image from "next/image";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SliderComponent = Slider as unknown as React.ComponentType<any>;

// Custom Arrow Components
function CustomNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="hover:text-black"
      style={{
        position: "absolute",
        display: "block",
        cursor: "pointer",
        top: "50%",
        right: "-30px",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <MdOutlineArrowForwardIos size={20} />
    </div>
  );
}

function CustomPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="hover:text-black"
      style={{
        position: "absolute",
        display: "block",
        left: "-30px",
        cursor: "pointer",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <MdArrowBackIos size={20} />
    </div>
  );
}

interface MultipleImageProps {
  images: ProductImage[];
  setSelectImg: (src: string) => void;
  selectImg: string;
}

function MultipleImage({
  images,
  setSelectImg,
  selectImg,
}: MultipleImageProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="flex w-full mx-auto">
      <SliderComponent {...settings} className="w-full">
        {images &&
          images.map((img: ProductImage) => (
            <div key={img.id} className="px-2">
              <Image
                src={img.productImageUrl || ""}
                alt="product"
                width={100}
                height={100}
                onMouseOver={() => setSelectImg(img.productImageUrl)}
                className={`w-full cursor-pointer rounded-md border border-primary  mb-2 transition-opacity duration-300 ease-in-out ${
                  selectImg === img.productImageUrl
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            </div>
          ))}
      </SliderComponent>
    </div>
  );
}

export default MultipleImage;
