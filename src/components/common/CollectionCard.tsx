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

        <div className="absolute bottom-6  left-8  ">
          <button className="text-lg xl:text-xl block py-2 border bg-textColor hover:bg-primaryColorHover text-white transition-all border-[#000] text-[#000] font-medium rounded-md px-8">
            Explore
          </button>
        </div>
      </Link>
    </div>
  );
}

export default CollectionCard;
