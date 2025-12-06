import Image from "next/image";
import { MdOutlineStarPurple500, MdOutlineStarBorder } from "react-icons/md";

import products from "../../public/images/noImage/best_deals_no_image.jpg";
import { fetchBestDeals } from "@/utils/apiServices";
import { brandNoImage, productDetailNoImg } from "../../public";
import Link from "next/link";
const BestDeals = async () => {
  const deals = await fetchBestDeals();
  const bestDeals = Array.isArray(deals) ? deals : [];

  return (
    <section className="my-7 lg:section-gap">
      <h2 className="py-6 text-2xl text-center lg:text-start lg:text-[35px] font-bold">
        Best Deals
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-8 px-2 lg:px-0 2xl:gap-10  ">
        {Array.isArray(bestDeals) &&
          bestDeals?.map((item: any, index: number) => (
            <Link href={`/product/${item.productSlug}`} key={index}>
              <div className="flex mt-2 xl:mt-0 flex-col items-center xl:flex-row gap-4 bg-white rounded-lg overflow-hidden">
                {/* <Image src={item.proImage} alt={item.title} /> */}
                {item?.proImage !== "" ? (
                  <Image
                    src={item?.proImage}
                    alt={item?.proImage}
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                ) : (
                  <Image
                    src={brandNoImage}
                    alt="Brand image"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                )}

                <div className="flex flex-col justify-between">
                  <h3 className="md:text-base text-sm  font-medium text-gray-800">
                    {item.title}
                  </h3>

                  <div>
                    <p className="mt-4 text-base md:text-lg text-gray-600">
                      TK {item.salesPrice}
                    </p>

                    <div className="flex  items-center">
                      {[1, 2, 3, 4, 5].map((star) =>
                        item.productRating === 0 ||
                        star > item.productRating ? (
                          <MdOutlineStarBorder key={star} />
                        ) : (
                          <MdOutlineStarPurple500 key={star} />
                        )
                      )}

                      <p className="text-secondaryColor text-sm md:text-base ml-1">
                        ({item.productRating})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default BestDeals;
