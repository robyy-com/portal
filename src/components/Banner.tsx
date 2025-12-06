"use client";
import { useGetBannerListMutation } from "@/features/products/productApi";
import { BannerType } from "@/types/types";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import BannerCard from "./BannerCard";

const SliderComponent = Slider as unknown as React.ComponentType<any>;

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dot: false,
        },
      },
    ],
  };

  const [getBanner] = useGetBannerListMutation();
  const [banners, setBanners] = useState<BannerType[] | null>(null);

  useEffect(() => {
    const fetchAdds = async () => {
      const obj = {
        imgLocation: "home",
      };
      try {
        const res: any = await getBanner(obj);

        if (res?.data?.length > 0) {
          setBanners(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch adds:", error);
      }
    };

    fetchAdds();
  }, [getBanner]);

  return (
    <>
      {banners && banners.length > 0 && (
        <SliderComponent {...settings} className="banner-slide">
          {banners?.map((item: any, index: any) => (
            <BannerCard key={index} {...item} />
          ))}
        </SliderComponent>
      )}
    </>
  );
};

export default Banner;
