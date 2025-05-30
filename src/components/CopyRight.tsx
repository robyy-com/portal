import Link from "next/link";

export default function CopyRight() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" bg-[#343434] ">
      <div className="container mx-auto lg:text-left lg:px-16 flex flex-col lg:flex-row justify-between items-center py-4 ">
        <p className="text-white text-[14px] mb-3 lg:mb-0">
          Copyright {currentYear} © robyy.com
        </p>
        <p className="text-white text-[14px] mb-0">
          All Rights Reserved.
          {/* <Link
            href="https://www.techqul.com"
            target="_blank"
            className="font-semibold hover:underline"
          >
            TechQul
          </Link> */}
        </p>
      </div>
    </footer>
  );
}
