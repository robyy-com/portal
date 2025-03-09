import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import products from "../../public/images/BestDeals/productsImge.png";
const BestDeals = () => {
  // Create an array with 10 elements (all undefined)
  const items = Array(10).fill(null);

  return (
    <section className="my-7 lg:section-gap">
      <h2 className="py-6 text-2xl text-center lg:text-start lg:text-[35px] font-bold">
        Best Deals
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-3 px-2 lg:px-0 2xl:gap-12  ">
        {items.map((_, index) => (
          <div
            key={index}
            className="flex mt-2 xl:mt-0 flex-col justify-between items-center xl:flex-row gap-4 bg-white rounded-lg overflow-hidden cursor-pointer"
          >
            <Image src={products} alt="Missing image" />
            <div className="flex flex-col justify-between">
              <h3 className="md:text-base text-sm  font-medium text-gray-800">
                Handmade Necklace
              </h3>

              <div>
                <p className="mt-4 text-base md:text-lg text-gray-600">
                  TK 333.00
                </p>
                <div className="flex  items-center">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <p className="text-secondaryColor text-sm md:text-base">
                    (12)
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestDeals;
