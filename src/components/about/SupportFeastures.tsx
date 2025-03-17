import {
  FaComments,
  FaCreditCard,
  FaStar,
  FaTruck,
  FaUndoAlt,
} from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaRegCheckCircle, FaGift } from "react-icons/fa";

const SupportFeatures = () => {
  const features = [
    {
      icon: <FaTruck size={40} />,
      title: "Fastest delivery",
      description: "We offer fastest delivery in all  over Baangladesh.",
    },
    {
      icon: <IoMdTime size={40} />,
      title: "24/7 Support",
      description:
        "We offer 24/7 service, so you can get the help you need when you need it.",
    },
    {
      icon: <FaRegCheckCircle size={40} />,
      title: "Authenticity",
      description:
        "Our products are genuine and guaranteed to be 100% authentic.",
    },
    {
      icon: <FaGift size={40} />,
      title: "Free Gift",
      description: "We reward our customers with free gifts for their loyalty.",
    },
  ];

  return (
    <div className="flex justify-center ">
      <div className="container mx-auto px-4 w-full">
        <div className="mt-2 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4 pt-9 pb-6 bg-white shadow-md border border-secondarytext rounded-xl h-40 relative"
              >
                <div className="mb-3 absolute top-[-23px] bg-white px-2 left-[50%] transform -translate-x-1/2 text-black">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportFeatures;
