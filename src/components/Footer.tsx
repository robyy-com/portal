import { FaApple } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import SocialShare from "./SocialShare";

const Footer = () => {
  return (
    <div className="bg-[#000000] text-white px-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-3 lg:grid-cols-12 lg:gap-4 py-10">
          <div className="col-span-4 items-center ">
            <div className="mb-5">
              ROBYY
              {/* <Image src={logo} alt="Missing Logo" /> */}
            </div>
            <p className="mt-3">
              Luxury cosmetics, affordable prices – because you deserve the
              best. Unbox confidence with top-quality cosmetics for
              every skin type.
            </p>
            <div className=" md:mt-[52px] mt-6 ">
              <SocialShare hover={true} />
            </div>
          </div>
          <div className="col-span-2 lg:mt-0 lg:m-0 m-auto mt-6 items-center">
            QUICK LINKS
            <div className="flex flex-col mt-3 ">
              <a
                href="#"
                className="textColor hover:textColor  py-2 rounded-md text-sm font-medium capitalize	"
              >
                About Us
              </a>
              <a
                href="#"
                className="textColor hover:textColor  py-2 rounded-md text-sm font-medium capitalize	"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="textColor hover:textColor  py-2 rounded-md text-sm font-medium capitalize	"
              >
                All Products
              </a>
              <a
                href="#"
                className="textColor hover:textColor  py-2 rounded-md text-sm font-medium capitalize	"
              >
                Login
              </a>
              <a
                href="#"
                className="textColor hover:textColor  py-2 rounded-md text-sm font-medium capitalize	"
              >
                Sing Up
              </a>
            </div>
          </div>
          <div className="col-span-2 lg:mt-0 mt-6 lg:m-0  m-auto items-center ">
            CUSTOMER AREA
            <div className="flex flex-col mt-3">
              <a
                href="#"
                className="textColor hover:textColor  py-2 rounded-md text-sm font-medium capitalize	"
              >
                About Us
              </a>
              <a
                href="#"
                className="textColor hover:textColor  py-2 rounded-md text-sm font-medium capitalize	"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="textColor hover:textColor  py-2 rounded-md text-sm font-medium capitalize	"
              >
                All Products
              </a>
              <a
                href="#"
                className="textColor hover:textColor  py-2 rounded-md text-sm font-medium capitalize	"
              >
                Login
              </a>
              <a
                href="#"
                className="textColor hover:textColor  py-2 rounded-md text-sm font-medium capitalize	"
              >
                Sing Up
              </a>
            </div>
          </div>

          <div className="col-span-4 text-regular font-bold lg:mt-0 mt-5 items-center">
            CONTACT
            <p className="mt-3 text-sm font-normal">
              Always here to help, always happy to serve.
            </p>
            <div className="flex mt-4">
              <div className="flex items-center">
                <FaMusic className="mr-3 text-[30px]" />
                <div className="flex flex-col text-base mr-10">
                  <p>Have any question?</p>
                  <span>+160166585987</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
