import Image from "next/image";

import { BannerType } from "@/types/types";
function BannerCard({ imgSource, navigateURL, altText }: BannerType) {
  return (
    <div className="rounded-xl py-4">
      <div className="h-[300px] lg:h-[450px] relative">
        <Image
          src={imgSource}
          alt={altText}
          placeholder="blur"
          blurDataURL={imgSource}
          layout="fill"
          quality={100}
          objectFit="cover"
        />
      </div>

      {/* <div className="relative flex justify-center md:justify-start items-center text-center  md:text-left justify-left h-full  md:pl-16 lg:pl-24">
        <div>
          <p className=" text-sm xl:text-base">PREMIUM PRODUCTS</p>

          <h1 className="textColor xl:text-4xl text-xl font-bold py-2 xl:py-4 ">
            Family Jewelry Collection
          </h1>
          <p className=" text-sm xl:text-base">Start from</p>
          <p className="textColor text-xl mt-2 xl:text-[35px]">Tk 450.00</p>
          <button className="bg-[#343434] py-2 px-7 text-sm xl:text-xl xl:py-3 xl:px-10 rounded-md	text-white mt-6">
            LEARN MORE
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default BannerCard;
