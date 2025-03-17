"use client";
import Comment from "@/components/common/Comment";
import FilterRightHeader from "@/components/product/FilterRightHeader";
import React, { ReactNode, use, useState } from "react";
import { FaFilter } from "react-icons/fa";
import SidebarFilter from "./SidebarFilter";
import { usePathname } from "next/navigation";

export default function ProductLayout({ children }: { children: ReactNode }) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const path = usePathname();
  return (
    <div className="container mx-auto lg:mt-6 mt-0">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}

        <SidebarFilter openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-9 ">
          <div className="my-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-textColor">
              {path === "/products"
                ? "All Products"
                : path?.split("/")[2].toUpperCase()}
            </h2>
            <div className="flex gap-4 justify-end items-center">
              {/* <FilterRightHeader /> */}

              <FaFilter
                onClick={() => setOpenDrawer(true)}
                className="block  lg:hidden cursor-pointer text-xl"
              />
            </div>
          </div>

          {/* Filtered Products */}
          {children}

          {/* Comments Section */}
          <div className="py-10">
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}
