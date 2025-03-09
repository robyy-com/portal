import {
  FaComments,
  FaCreditCard,
  FaStar,
  FaTruck,
  FaUndoAlt,
} from "react-icons/fa";

const SupportFeatures = () => {
  const features = [
    {
      icon: <FaTruck size={40} />,
      title: "Free Delivery",
      description: "from $40",
    },
    { icon: <FaStar size={40} />, title: "Best Quality", description: "Brand" },
    {
      icon: <FaUndoAlt size={40} />,
      title: "7 Days",
      description: "for free Return",
    },
    {
      icon: <FaComments size={40} />,
      title: "Feedback",
      description: "99% Real Data",
    },
    {
      icon: <FaCreditCard size={40} />,
      title: "Payment",
      description: "Secure",
    },
  ];

  return (
    <div className=" container grid grid-cols-12 m-auto mt-2 mb-10">
      <div className=" xl:col-span-1"></div>
      <div className=" lg:px-4 col-span-12 xl:col-span-10 grid xl:gap-8 gap-3 grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 md:grid-cols-8 xl:grid-cols-10 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="col-span-2 text-center  mb-7 relative justify-center  items-center px-4 pt-9 py-6 bg-white shadow-md border border-secondarytext rounded-xl "
          >
            <div className="mb-3 absolute top-[-23px] bg-white px-2 left-[50%] transform translate-x-[-50%] text-black">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg text-black">
              {feature.title}
            </h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className=" xl:col-span-1"></div>
    </div>
  );
};

export default SupportFeatures;
