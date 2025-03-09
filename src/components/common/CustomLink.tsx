"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
  path: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ path, children }) => {
  const pathname = usePathname();
  const isActive = pathname.endsWith(path);

  return (
    <Link href={path}>
      <li
        className={`mb-2 mt-4 text-regular font-semibold cursor-pointer ${
          isActive ? "text-secondaryColor" : "text-primaryColor"
        }`}
      >
        {children}
      </li>
    </Link>
  );
};

export default CustomLink;
