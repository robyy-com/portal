import { fatchTopBrand } from "@/utils/apiServices";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

async function TopBrandPage() {
  const topBrand: any = await fatchTopBrand();

  return (
    <div>
      <div className="py-10 container mx-auto px-2.5 xl:px-0 mt-5">
        <h2 className=" flex items-center gap-4 mb-12  text-[35px] font-bold">
          TOP BRAND <FaArrowRightLong />
        </h2>
        <p className="text-center mb-5"></p>

        <div>
          <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-3 ">
            {topBrand && topBrand?.length > 0 ? (
              topBrand.map((brand: any) => (
                <li
                  key={brand?.brandId}
                  className=" flex justify-center items-center w-full col-span-1 border border-primaryColor hover:scale-105 transition-all"
                >
                  <Link href={`/brand/${brand.brandSlug}`}>
                    <Image
                      src={brand?.brandImg}
                      alt={brand?.brandName}
                      width={150} // Set a fixed width based on grid needs
                      height={60} // Set a fixed height based on grid needs
                      objectFit="cover"
                      className=""
                    />
                  </Link>
                </li>
              ))
            ) : (
              <p>not found Top-Brand item....!</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBrandPage;
