"use client";
import { fetchProducts } from "@/utils/apiServices";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./ui/Dropdown";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [searchKey, setSearchKey] = useState<string>("");
  const [products, setProducts] = useState<any>([]);
  const [searchproducts, setSearchproducts] = useState<any>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fetchProductData = async () => {
    try {
      const res: any = await fetchProducts();
      if (res?.length > 0) {
        setProducts(res);
      }
    } catch (error) {
      console.error("Failed to fetch adds:", error);
    }
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  const handleDropdownClose = () => {
    setSearchproducts([]);
  };

  // Hide dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleDropdownClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearchKey(value);

    if (value) {
      const filteredProducts = products.filter((product: any) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchproducts(filteredProducts);
    } else {
      setSearchproducts([]);
    }
  };

  return (
    <div className="w-full relative ">
      <input
        type="text"
        className="w-full  border-none bg-bgColor rounded-md py-2 md:py-4 px-4 pr-10 focus:outline-none focus:border-dark-500"
        placeholder="Search..."
        value={searchKey}
        onChange={handleSearch}
      />
      <FaSearch className="absolute right-4 top-2 md:top-4 text-2xl" />
      {searchKey && searchproducts && searchproducts?.length > 0 && (
        <div ref={dropdownRef}>
          <Dropdown
            searchproducts={searchproducts}
            onSelect={handleDropdownClose}
          />
        </div>
      )}
    </div>
  );
}
