"use client";
import { fetchProducts } from "@/utils/apiServices";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./ui/Dropdown";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [searchKey, setSearchKey] = useState<string>("");
  const [products, setProducts] = useState<any[]>([]);
  const [searchProducts, setSearchProducts] = useState<any[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch products once
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res: any = await fetchProducts();
        if (res?.length > 0) {
          setProducts(res);
        } else {
          console.warn("Empty product list from API.");
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProductData();
  }, []);

  // Debounced Search
  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      const normalize = (str: string) =>
        str
          ?.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // remove accents
          .replace(/\s+/g, " ") // collapse multiple spaces
          .trim();

      const query = normalize(searchKey);
      if (query !== "") {
        const filtered = products.filter((product: any) => {
          const title = normalize(product?.title || "");
          return title.includes(query);
        });
        setSearchProducts(filtered);
      } else {
        setSearchProducts([]);
      }
    }, 300);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchKey, products]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  const handleDropdownClose = () => {
    setSearchProducts([]);
  };

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

  return (
    <div className="w-full relative">
      <input
        type="text"
        className="w-full border-none bg-bgColor rounded-md py-2 md:py-4 px-4 pr-10 focus:outline-none focus:border-dark-500"
        placeholder="Search..."
        value={searchKey}
        onChange={handleSearch}
      />
      <FaSearch className="absolute right-4 top-2 md:top-4 text-2xl" />
      {searchKey && searchProducts.length > 0 && (
        <div ref={dropdownRef}>
          <Dropdown
            searchproducts={searchProducts}
            onSelect={handleDropdownClose}
          />
        </div>
      )}
    </div>
  );
}
