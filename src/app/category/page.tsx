import { Category } from "@/types/types";
import { fetchCategories } from "@/utils/apiServices";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import catagory from "../../../public/images/Caregories/img3-middle.png";
async function CategoryPage() {
  const categories: Category[] = await fetchCategories();

  return (
    <div className="lg:py-10 xl:px-0 px-2.5 py-5  container mx-auto lg:mt-5">
      <h2 className=" flex items-center gap-4 xl:mb-12 text-regular md:text-xl lg:text-3xl xl:text-[35px] font-bold">
        All CATEGORIES <FaArrowRightLong />
      </h2>
      <p className="text-center mb-5"></p>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 ">
        {categories &&
          categories?.map((item: Category, index: number) => (
            <Link href={`/category/${item.categorySlug}`} key={index}>
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-center items-center">
                <div className="w-full flex items-center justify-center">
                  <Image
                    src={item.categoryImg || catagory}
                    alt="category image"
                    width={200}
                    height={200}
                    className=" w-full"
                  />
                </div>
                <div className="py-4 text-center">
                  <h4 className="mt-2 text-gray-800 text-[30px] font-semibold line-clamp-1">
                    {item.categoryName}
                  </h4>
                  <p className=" mt-1 text-secondaryColor">
                    {item?.totalProd} Products
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CategoryPage;
