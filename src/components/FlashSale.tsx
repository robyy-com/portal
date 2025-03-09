"use client";
import Image from "next/image";
import productImage from "../../public/images/placeholder.png";
const FlashSale = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-[#000000] text-white p-6 xl:py-10 xl:px-10 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div>
          <div className="py-5 px-5">
            <h3 className="text-2xl xl:text-[35px]">Flash Sale</h3>
            <p className=" text-base xl:text-regular mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <p className="pt-5">
              <span className="text-[25px]">05 :</span>
              <span className="text-[25px]">42 :</span>
              <span className="text-[25px]">: 54</span>
            </p>
          </div>
        </div>
        {/* <Slider {...settings}> */}
        <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow min-height: 160px; gap-5 ">
          <div>
            <div className=" flex items-center h-full">
              <div>
                <Image src={productImage} alt="Missiing iamge" />
              </div>
              <div className="px-4">
                <p className="text-black text-regular font-bold xl:text-[25px] pt-2">
                  Perfect Diamond Jewelry
                </p>
                <p className="text-black pt-5">TK 980.00</p>{" "}
                <span>24 left</span>
                <div className=" bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-[#000] h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow min-height: 160px;gap-5  xl:ml-5 ">
          <div>
            <div className=" items-center flex h-full">
              <div>
                <Image src={productImage} alt="Missiing iamge" />
              </div>
              <div className="px-4">
                <p className="text-black text-regular font-bold xl:text-[25px] pt-2">
                  Perfect Diamond Jewelry
                </p>
                <p className="text-black pt-5">TK 980.00</p>{" "}
                <span>24 left</span>
                <div className=" bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-[#000] h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default FlashSale;
