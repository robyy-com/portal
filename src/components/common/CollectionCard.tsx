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
          <button className="text-lg xl:text-xl  px-4 font-bold   text-primaryColor rounded-md uppercase">
            Explore
          </button>
        </div>
      </Link>
    </div>
  );
}

export default CollectionCard;
