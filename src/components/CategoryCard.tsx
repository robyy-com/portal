import Image from "next/image";

function CategoryCard({ catagory }: any) {
  return (
    <div>
      <div className="">
        <div className="relative p-4 w-[95%] bg-white rounded-lg overflow-hidden shadow hover:shadow flex flex-col justify-center items-center min-height: 160px">
          <div className="w-full h-full bg-gray-100 rounded-lg">
            <Image src={catagory} alt="Missign" />
          </div>

          <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
            NECKLACES
          </h2>
          <p className="text-center mt-1">26 Products</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
