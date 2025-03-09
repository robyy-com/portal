import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import products from "../../public/images/BestDeals/productsImge.png";

function DealsCard() {
  return (
    <div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-6  "> */}
      <div className="flex flex-col xl:flex-row shadow hover:shadow-md gap-2 w-[95%]  bg-white rounded-[20px] overflow-hidden cursor-pointer">
        <Image src={products} alt="Missing iamge" />

        <div className="relative p-4">
          <h3 className="text-base md:text-xl font-medium text-gray-800">
            Handmade Necklace
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">TK 333.00</p>
          <div className="flex">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <p>(12)</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default DealsCard;
