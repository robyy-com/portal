import Image from "next/image";
import Link from "next/link";
import Image1 from "../../../public/images/Collection/img.png";
function CollectionCard() {
  return (
    <div>
      <Link
        href="/top-brand"
        className="relative overflow-hidden cursor-pointer"
      >
        <Image
          className="object-cover w-full h-auto"
          src={Image1}
          alt="Flower and sky"
        />

        <div className="absolute top-4 lg:top-0 left-0 px-6 lg:py-[40px] 2xl:py-[100px]">
          <h3>Top Brand</h3>
          <p className="leading-normal text-sm textColor">New Year Sale</p>
          <h4 className="mb-3 text-lg lg:text-2xl xl:text-4xl xl:leading-[50px] font-semibold tracking-tight textColor">
            GET An Extra<br></br> 60% off
          </h4>
          <button className="bg-[#343434] text-sm lg:text-base xl:text-lg py-1 px-4 xl:py-3 xl:px-8 text-white rounded-md uppercase">
            Shop Now
          </button>
        </div>
      </Link>
    </div>
  );
}

export default CollectionCard;
