import AllBrand from "@/components/product/AllBrand";
import AllCategory from "@/components/product/AllCategory";
import Drawer from "@/components/ui/Drawer";
import { Brand, Category } from "@/types/types";
import { fatchTopBrand, fetchCategories } from "@/utils/apiServices";
import Link from "next/link";
import React from "react";

interface Props {
  openDrawer: boolean;
  setOpenDrawer: (value: boolean) => void;
}
export default async function SidebarFilter({
  openDrawer,
  setOpenDrawer,
}: Props) {
  const categories: Category[] = await fetchCategories();
  const topBrand: Brand[] = await fatchTopBrand();
  return (
    <>
      <div className="hidden lg:block col-span-3 shadow-md h-[100%]">
        <div className="mt-4">
          <h2
            className="ml-5 mb-2 text-3xl font-semibold text-textColor"
            // onClick={() => setOpenDrawer(true)}
          >
            Filters
          </h2>

          {/* Categories Filter */}
          <div className="border border-borderColor px-7 py-4 rounded-[30px]">
            <h2 className="text-xl text-textColor font-semibold mb-2">
              Categories
            </h2>
            <AllCategory categories={categories} />
          </div>

          {/* Brands Filter */}
          <div className="border border-borderColor px-7 py-4 rounded-[30px]">
            <h2 className="text-xl text-textColor font-semibold mb-2">
              Brands
            </h2>
            <AllBrand brands={topBrand} />
          </div>

          <div className="flex items-center justify-center text-center gap-4 px-4 my-10">
            <Link
              href="/products"
              className="bg-primaryColor hover:bg-primaryColorHover border border-borderColor transition-all font-bold w-full text-white py-2 px-4 rounded"
            >
              Reset Filter
            </Link>
          </div>
        </div>
      </div>

      {openDrawer && (
        <Drawer isOpen={openDrawer} onClose={() => setOpenDrawer(false)}>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-textColor">Filters</h2>

            {/* Categories Filter */}
            <div className="border border-borderColor px-2 py-4 ">
              <h2 className="text-xl text-textColor font-semibold mb-2">
                Categories
              </h2>
              <AllCategory categories={categories} />
            </div>

            {/* Brands Filter */}
            <div className="border border-borderColor px-2 py-4 ">
              <h2 className="text-xl text-textColor font-semibold mb-2">
                Brands
              </h2>
              <AllBrand brands={topBrand} />
            </div>

            <div className="flex items-center justify-end gap-4 px-4 my-10">
              <button className="bg-primaryColor hover:bg-primaryColorHover border border-borderColor transition-all font-bold w-full text-white py-2 px-4 rounded">
                Reset Filter
              </button>
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
}
