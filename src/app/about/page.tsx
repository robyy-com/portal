import Newsletter from "@/components/Newsletter";
import AboutDetails from "@/components/about/AboutDetails";
import SupportFeatures from "@/components/about/SupportFeastures";
import Image from "next/image";
import contactImage from "../../../public/images/Products iamge/img1-top 1 (1).png";
import { FaArrowRightLong } from "react-icons/fa6";
function AboutPage() {
  //test
  return (
    <div>
      <div className="container mx-auto  px-2.5 lg:mt-10 py-8">
        <h2 className=" flex items-center gap-4 xl:mb-12 text-regular md:text-xl lg:text-3xl xl:text-[35px] font-bold">
          About Us <FaArrowRightLong />
        </h2>
        <p className="text-center mb-5"></p>
        <div className="text-center relative mb-8">
          <div className="relative rounded-[30px] overflow-hidden w-full md:h-[200px] lg:h-[400px] h-[150px] lg:mb-[100px]">
            <Image
              className=""
              src={contactImage}
              layout="fill"
              objectFit="cover"
              alt="about"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-overlayColor flex items-center justify-center">
              <h1 className=" text-xl md:text-4xl lg:text-[110px] xl:text-[128px] font-semibold text-textColor">
                ABOUT US
              </h1>
            </div>
          </div>
        </div>
        <AboutDetails />
      </div>
      <SupportFeatures />
      <Newsletter />
    </div>
  );
}

export default AboutPage;
