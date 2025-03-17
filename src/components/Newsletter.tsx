import { MdForwardToInbox } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className="bg-[#343434] text-white ">
      <div className="container mx-auto md:grid md:grid-cols-12 md:gap-6 py-10">
        <div className="md:col-span-6  flex items-start md:items-center">
          <MdForwardToInbox size={80} />

          <div className="ml-2 md:ml-6 mb-2">
            <h4 className="font-bold text-xl md:text-[25px] mb-2">
              Sign Up for Newsletter
            </h4>
            <p className=" md:text-base text-sm">
              Signup our newsletter to get the latest news and updates.
            </p>
          </div>
        </div>
        <div className="md:col-span-6 mt-2 md:mt-0 flex items-center">
          <input
            type="text"
            className="border w-full md:w-[70%] border-gray-300 rounded-md py-2 px-2 md:py-3 md:px-4 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
          <button className="bg-[#565656] py-2 px-5 rounded-md text-sm ml-[-122px]	 md:ml-[-135px]">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
