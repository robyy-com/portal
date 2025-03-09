"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Search from "./Search";
import Drawer from "./ui/Drawer";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="flex items-center justify-between h-16">
        <div className="w-full flex items-center justify-between gap-8 md:hidden my-4 md:my-0">
          <div className="w-full">
            <Search />
          </div>

          <button
            onClick={toggleMenu}
            className="text-2xl textColor focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:text-[12px] lg:text-base text-center  md:flex space-x-3 items-center">
          <Link
            href="/"
            className="textColor hover:textColor px-3 py-2 rounded-md  font-medium"
          >
            Home
          </Link>
          <Link
            href="/category"
            className="textColor hover:textColor px-3 py-2 rounded-md  font-medium"
          >
            All Categories
          </Link>
          <Link
            href="/products"
            className="textColor hover:textColor px-3 py-2 rounded-md  font-medium"
          >
            All Products
          </Link>

          <Link
            href="/top-brand"
            className="textColor hover:textColor px-3 py-2 rounded-md  font-medium"
          >
            Brands
          </Link>
          <Link
            href="/wishlist"
            className="textColor hover:textColor px-3 py-2 rounded-md  font-medium"
          >
            Wishlist
          </Link>
          <Link
            href="/about"
            className="textColor hover:textColor px-3 py-2 rounded-md  font-medium"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="textColor hover:textColor px-3 py-2 rounded-md  font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <Drawer isOpen={menuOpen} onClose={toggleMenu}>
          <div className="md:hidden  px-2 pb-3 sm:px-3">
            <Link
              href="/"
              className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/category"
              className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              All Categories
            </Link>
            <Link
              href="/products"
              className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              All Products
            </Link>

            <Link
              href="/top-brand"
              className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Brands
            </Link>

            <Link
              href="/blogs"
              className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              href="/about"
              className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </Drawer>
      )}
    </nav>
  );
};

export default Navbar;
