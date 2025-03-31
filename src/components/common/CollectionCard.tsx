import Image from "next/image";
import Link from "next/link";
function CollectionCard({ brand }: any) {
  return (
    <div>
      <Link
        href={`/brand/${brand?.slug}`}
        className="relative overflow-hidden cursor-pointer"
      >
        <Image
          className="object-cover w-full h-auto"
          src={brand?.image}
          alt="Flower and sky"
        />

        <div className="absolute top-4 lg:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-6 lg:py-[40px] 2xl:py-[100px]">
          <button className="bg-[#343434] text-sm lg:text-base xl:text-lg py-1 px-4 xl:py-3 xl:px-8 text-white rounded-md uppercase">
            Explore
          </button>
        </div>
      </Link>
    </div>
  );
}

export default CollectionCard;
